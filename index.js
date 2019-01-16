const data = [
    { width: 300, height: 150, fill: 'green' }
]
const svg = d3.select('svg');

svg.select('rect')
    .data(data)
    .attr('height', (d, i, n) => {
        console.log(i)
        console.log(n)
        return d.height
    })
    .attr('width', d => d.width)
    .attr('fill', d => d.fill)