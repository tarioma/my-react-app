import { useEffect } from 'react';
import * as d3 from 'd3';

const BigDataVisualization = () => {
    useEffect(() => {
        // Пример данных
        const data = d3.range(1000).map(d => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            value: Math.random() * 100
        }));

        const width = 800;
        const height = 600;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };

        const svg = d3.select("#big-data-visualization")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Создание масштабов
        const x = d3.scaleLinear()
            .domain([0, 100])
            .range([0, width - margin.left - margin.right]);

        const y = d3.scaleLinear()
            .domain([0, 100])
            .range([height - margin.top - margin.bottom, 0]);

        // Добавление осей
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
            .call(d3.axisBottom(x));

        svg.append("g")
            .call(d3.axisLeft(y));

        // Создание точек данных
        svg.selectAll("circle")
            .data(data)
            .enter().append("circle")
            .attr("cx", d => x(d.x))
            .attr("cy", d => y(d.y))
            .attr("r", 3)
            .attr("fill", "steelblue");
    }, []);

    return (
        <div id="big-data-visualization">
            <h3>Визуализация больших объемов данных с использованием D3.js</h3>
        </div>
    );
}

export default BigDataVisualization;