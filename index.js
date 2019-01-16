const data = [
    { width: 300, height: 150, fill: 'green' },
    { width: 200, height: 50, fill: 'pink' },
    { width: 100, height: 20, fill: 'red' }
]
const svg = d3.select('svg');

const rects = svg.selectAll('rect').data(data);

rects.enter().append('rect')
    .attr('height', d => d.height)
    .attr('width', d => d.width)
    .attr('fill', d => d.fill);