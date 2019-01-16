// select svg container first
const svg = d3.select('svg');

d3.json('menu.json').then(data => {
    // join data to circles group
    const rects = svg.selectAll('rect').data(data);

    // add attrs to circles already are in DOM
    rects.attr('width', 50)
        .attr('height', d => d.orders)
        .attr('fill', 'orange')
        .attr('x', (d, i) => i * 60);

    // append enter selection to DOM and add attrs to them
    rects.enter().append('rect')
        .attr('width', 50)
        .attr('height', d => d.orders)
        .attr('fill', 'orange')
        .attr('x', (d, i) => i * 60);
});