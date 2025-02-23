import { useEffect, useState } from 'react';
import axios from 'axios';
import * as d3 from 'd3';

const ExtendedDashboard = () => {
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
            const svg = d3.select('#d3-line-chart')
                .attr('width', 600)
                .attr('height', 400)
                .append('g')
                .attr('transform', 'translate(50,50)');

            const x = d3.scaleBand()
                .domain(data.map(d => d.id))
                .range([0, 500])
                .padding(0.1);

            const y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.body.length)])
                .range([300, 0]);

            const line = d3.line()
                .x(d => x(d.id))
                .y(d => y(d.body.length));

            svg.append('g')
                .attr('transform', 'translate(0,300)')
                .call(d3.axisBottom(x));

            svg.append('g')
                .call(d3.axisLeft(y));

            svg.append('path')
                .datum(data)
                .attr('fill', 'none')
                .attr('stroke', 'steelblue')
                .attr('stroke-width', 1.5)
                .attr('d', line);

            // Дополнительная визуализация, например, круговая диаграмма
            const pieData = d3.pie().value(d => d.body.length)(data);
            const arc = d3.arc().innerRadius(0).outerRadius(100);

            const pieSvg = d3.select('#d3-pie-chart')
                .attr('width', 200)
                .attr('height', 200)
                .append('g')
                .attr('transform', 'translate(100,100)');

            pieSvg.selectAll('path')
                .data(pieData)
                .enter().append('path')
                .attr('d', arc)
                .attr('fill', (d, i) => d3.schemeCategory10[i % 10]);
        }
    }, [data]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;

    return (
        <div>
            <h3>Расширенный дашборд с использованием React, D3.js и Axios</h3>
            <svg id="d3-line-chart"></svg>
            <svg id="d3-pie-chart"></svg>
        </div>
    );
}

export default ExtendedDashboard;