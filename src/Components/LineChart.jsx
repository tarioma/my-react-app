import {useEffect} from "react";
import * as d3 from 'd3';

const LineChart = () => {
    useEffect(() => {
        const data = [
            { date: new Date(2020, 0, 1), value: 10 },
            { date: new Date(2020, 1, 1), value: 20 },
            { date: new Date(2020, 2, 1), value: 30 },
            { date: new Date(2020, 3, 1), value: 40 },
            { date: new Date(2020, 4, 1), value: 50 }
        ];
        const width = 500;
        const height = 300;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };

        const svg = d3.select("#line-chart")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const x = d3.scaleTime()
            .domain(d3.extent(data, d => d.date))
            .range([0, width - margin.left - margin.right]);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .nice()
            .range([height - margin.top - margin.bottom, 0]);

        const line = d3.line()
            .x(d => x(d.date))
            .y(d => y(d.value));

        svg.append("g")
            .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
            .call(d3.axisBottom(x));

        svg.append("g")
            .call(d3.axisLeft(y));

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue") .attr("stroke-width", 1.5) .attr("d", line); }, []);
    return ( <div id="line-chart"> <h3>Линейный график с использованием D3.js</h3> </div> );
}

export default LineChart;