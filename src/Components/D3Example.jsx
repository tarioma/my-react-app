import * as d3 from 'd3';
import {useEffect} from "react";

const D3Example = () => {
    useEffect(() => {
        const data = [10, 20, 30, 40, 50];
        const width = 500;
        const height = 300;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };

        const svg = d3.select("#d3-container")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const x = d3.scaleBand()
            .domain(data.map((d, i) => i))
            .range([0, width - margin.left - margin.right])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .nice()
            .range([height - margin.top - margin.bottom, 0]);

        svg.append("g")
            .selectAll("rect")
            .data(data)
            .enter().append("rect")
            .attr("x", (d, i) => x(i))
            .attr("y", d => y(d))
            .attr("width", x.bandwidth())
            .attr("height", d => y(0) - y(d))
            .attr("fill", "steelblue");

        svg.append("g")
            .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
            .call(d3.axisBottom(x).tickFormat(i => i + 1));

        svg.append("g")
            .call(d3.axisLeft(y));
    }, []);

    return (
        <div id="d3-container">
            <h3>График с использованием D3.js</h3>
        </div>
    );
}

export default D3Example;
