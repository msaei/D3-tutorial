// select svg container first
const svg = d3.select('svg');

d3.json('planets.json').then(data => {
    // join data to circles group
    const circles = svg.selectAll('circle').data(data);

    // add attrs to circles already are in DOM
    circles.attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', d => d.radius)
        .attr('fill', d => d.fill);

    // append enter selection to DOM and add attrs to them
    circles.enter().append('circle')
        .attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', d => d.radius)
        .attr('fill', d => d.fill);
});