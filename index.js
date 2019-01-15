const canvas = d3.select('.canvas');

const svg = canvas.append('svg')
    .attr('width', 700)
    .attr('height', 700);
const group = svg.append('g')
    .attr('transform', 'translate(0, 100)');
// add shapes to the svg container
group.append('rect')
    .attr('width', 100)
    .attr('height', 50)
    .attr('x', 20)
    .attr('y', 20)
    .attr('fill', 'blue');
group.append('circle')
    .attr('r', 50)
    .attr('cx', 200)
    .attr('cy', 50)
    .attr('fill', 'pink');
group.append('line')
    .attr('x1', 280)
    .attr('y1', 20)
    .attr('x2', 300)
    .attr('y2', 100)
    .attr('stroke', 'red');

svg.append('text')
    .attr('x', 20)
    .attr('y', 200)
    .attr('fill', 'grey')
    .text('Hello')
    .style('font-family', 'arial')