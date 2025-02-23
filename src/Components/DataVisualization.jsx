import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DataVisualization = () => {
    const d3Container = useRef(null);

    useEffect(() => {
        if (d3Container.current) {
            const data = [10, 20, 30, 40, 50];
            const width = 500;
            const height = 300;
            const margin = { top: 20, right: 30, bottom: 30, left: 40 };

            const svg = d3.select(d3Container.current)
                .attr('width', width)
                .attr('height', height);

            const x = d3.scaleBand()
                .domain(data.map((d, i) => i))
                .range([margin.left, width - margin.right])
                .padding(0.1);

            const y = d3.scaleLinear()
                .domain([0, d3.max(data)])
                .nice()
                .range([height - margin.bottom, margin.top]);

            svg.append('g')
                .selectAll('rect')
                .data(data)
                .join('rect')
                .attr('x', (d, i) => x(i))
                .attr('y', d => y(d))
                .attr('height', d => y(0) - y(d))
                .attr('width', x.bandwidth())
                .attr('fill', 'steelblue');

            svg.append('g')
                .attr('transform', `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(x).tickFormat(i => i + 1));

            svg.append('g')
                .attr('transform', `translate(${margin.left},0)`)
                .call(d3.axisLeft(y));
        }
    }, [d3Container.current]);

    return (
        <svg ref={d3Container}>
            <h3>График с использованием D3.js в React</h3>
        </svg>
    );
}

export default DataVisualization;