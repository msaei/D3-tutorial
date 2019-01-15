const canvas = d3.select('.canvas');

const svg = canvas.append('svg')
    .attr('width', 700)
    .attr('height', 700);

// add shapes to the svg container
svg.append('rect')
    .attr('width', 100)
    .attr('height', 50)
    .attr('x', 20)
    .attr('y', 20)
    .attr('fill', 'blue');
svg.append('circle')
    .attr('r', 50)
    .attr('cx', 200)
    .attr('cy', 50)
    .attr('fill', 'pink');
svg.append('line')
    .attr('x1', 50)
    .attr('y1', 250)
    .attr('x2', 100)
    .attr('y2', 200)
    .attr('stroke', 'red');

svg.append('text')
    .attr('x', 20)
    .attr('y', 200)
    .attr('fill', 'grey')
    .text('Hello')
    .style('font-family', 'arial')