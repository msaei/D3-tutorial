// select svg container first
const svg = d3.select('svg');

const y = d3.scaleLinear()
    .domain([0, 1000])
    .range([0, 500]);

d3.json('menu.json').then(data => {
    // join data to circles group
    const rects = svg.selectAll('rect').data(data);

    // add attrs to circles already are in DOM
    rects.attr('width', 50)
        .attr('height', d => y(d.orders))
        .attr('fill', 'orange')
        .attr('x', (d, i) => i * 60);

    // append enter selection to DOM and add attrs to them
    rects.enter().append('rect')
        .attr('width', 50)
        .attr('height', d => y(d.orders))
        .attr('fill', 'orange')
        .attr('x', (d, i) => i * 60);
});