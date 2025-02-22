import * as d3 from 'd3';
import {useEffect} from "react";

const ScalesAndAxes = () => {
    useEffect(() => {
        const data = [
            { value: 10 },
            { value: 20 },
            { value: 30 },
            { value: 40 },
            { value: 50 }
        ];
        const width = 500;
        const height = 300;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };

        const svg = d3.select("#scales-and-axes")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Создание масштабов
        const x = d3.scaleBand()
            .domain(data.map((d, i) => i))
            .range([0, width - margin.left - margin.right])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .nice()
            .range([height - margin.top - margin.bottom, 0]);

        // Добавление осей
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
            .call(d3.axisBottom(x).tickFormat(i => i + 1));

        svg.append("g")
            .call(d3.axisLeft(y));

        // Создание графических элементов
        svg.selectAll("rect")
            .data(data)
            .enter().append("rect")
            .attr("x", (d, i) => x(i))
            .attr("y", d => y(d.value))
            .attr("width", x.bandwidth())
            .attr("height", d => y(0) - y(d.value))
            .attr("fill", "steelblue");
    }, []);

    return (
        <div id="scales-and-axes">
            <h3>Работа с масштабами и осями в D3.js</h3>
        </div>
    );
}

export default ScalesAndAxes;