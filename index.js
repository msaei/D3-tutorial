// select svg container first
const svg = d3.select('.canvas')
    .append('svg')
    .attr('width', 600)
    .attr('height', 600);



d3.json('menu.json').then(data => {
    // scaleing x , y
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.orders)])
        .range([0, 500]);
    const x = d3.scaleBand()
        .domain(data.map(item => item.name))
        .range([0, 500])
        .paddingInner(0.1)
        .paddingOuter(0.2);

    // join data to circles group
    const rects = svg.selectAll('rect').data(data);

    // add attrs to circles already are in DOM
    rects.attr('width', x.bandwidth)
        .attr('height', d => y(d.orders))
        .attr('fill', 'orange')
        .attr('x', d => x(d.name));

    // append enter selection to DOM and add attrs to them
    rects.enter().append('rect')
        .attr('width', x.bandwidth)
        .attr('height', d => y(d.orders))
        .attr('fill', 'orange')
        .attr('x', d => x(d.name));
});