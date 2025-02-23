import { useEffect, useState } from 'react';
import axios from 'axios';
import * as d3 from 'd3';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Фетч данных с сервера
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(response.data.slice(0, 10)); // Оставляем только первые 10 элементов для визуализации
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            // Визуализация данных с помощью D3.js
            const svg = d3.select('#d3-chart')
                .attr('width', 600)
                .attr('height', 400);

            const x = d3.scaleBand()
                .domain(data.map(d => d.id))
                .range([0, 600])
                .padding(0.1);

            const y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.body.length)])
                .range([400, 0]);

            svg.selectAll('rect')
                .data(data)
                .enter().append('rect')
                .attr('x', d => x(d.id))
                .attr('y', d => y(d.body.length))
                .attr('width', x.bandwidth())
                .attr('height', d => 400 - y(d.body.length))
                .attr('fill', 'steelblue');

            svg.append('g')
                .attr('transform', 'translate(0,400)')
                .call(d3.axisBottom(x));

            svg.append('g')
                .call(d3.axisLeft(y));
        }
    }, [data]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;

    return (
        <div>
            <h3>Дашборд с использованием React, D3.js и Axios</h3>
            <svg id="d3-chart"></svg>
        </div>
    );
}

export default Dashboard;