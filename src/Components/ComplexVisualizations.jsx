import { useEffect } from 'react';
import * as d3 from 'd3';

const ComplexVisualizations = () => {
    useEffect(() => {
        const data = {
            name: 'Root',
            children: [
                {
                    name: 'Branch 1',
                    children: [
                        { name: 'Leaf 1.1' },
                        { name: 'Leaf 1.2' }
                    ]
                },
                {
                    name: 'Branch 2',
                    children: [
                        { name: 'Leaf 2.1' },
                        { name: 'Leaf 2.2' }
                    ]
                }
            ]
        };

        const width = 500;
        const height = 300;
        const margin = { top: 20, right: 90, bottom: 30, left: 90 };

        const svg = d3.select("#tree-visualization")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const treeLayout = d3.tree().size([height - margin.top - margin.bottom, width - margin.left - margin.right]);
        const root = d3.hierarchy(data);
        treeLayout(root);

        svg.selectAll('line')
            .data(root.links())
            .enter()
            .append('line')
            .attr('x1', d => d.source.y)
            .attr('y1', d => d.source.x)
            .attr('x2', d => d.target.y)
            .attr('y2', d => d.target.x)
            .attr('stroke', 'black');

        svg.selectAll('circle')
            .data(root.descendants())
            .enter()
            .append('circle')
            .attr('cx', d => d.y)
            .attr('cy', d => d.x)
            .attr('r', 5)
            .attr('fill', 'steelblue');

        svg.selectAll('text')
            .data(root.descendants())
            .enter()
            .append('text')
            .attr('x', d => d.y + 10)
            .attr('y', d => d.x)
            .text(d => d.data.name);
    }, []);

    return (
        <div id="tree-visualization">
            <h3>Дерево с использованием D3.js</h3>
        </div>
    );
}

export default ComplexVisualizations;