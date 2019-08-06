import React, { Component } from 'react';
import * as d3 from 'd3';

const bar_data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 1300000},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 250000},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 40000},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 370000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 900000},
];

const donut_data = [
    { name: 'name1', total: 12, count: 1, value: 1000, amount: 1300000, color: 'rgba(0,0,0,0.1)' },
    { name: 'name2', total: 34, count: 2, value: 1002, amount: 250000, color: 'rgba(0,0,0,0.5)' },
    { name: 'name3', total: 54, count: 3, value: 1003, amount: 800000, color: 'rgba(0,0,0,0.6)' },
    { name: 'name4', total: 11, count: 4, value: 1004, amount: 150000, color: 'rgba(0,0,0,0.2)' },
    { name: 'name5', total: 76, count: 5, value: 1005, amount: 175000, color: 'rgba(0,0,0,0.3)' },
    { name: 'name6', total: 55, count: 6, value: 1006, amount: 100000, color: 'rgba(0,0,0,0.4)' },
    { name: 'name7', total: 53, count: 7, value: 1007, amount: 500000, color: 'rgba(0,0,0,0.7)' },
    { name: 'name8', total: 31, count: 8, value: 1008, amount: 40000, color: 'rgba(0,0,0,0.2)' },
    { name: 'name9', total: 62, count: 9, value: 1009, amount: 375000, color: 'rgba(0,0,0,0.3)' },
    { name: 'name10', total: 69, count: 10, value: 1023, amount: 60000, color: 'rgba(0,0,0,0.4)' },
];

// const width = 550,
// 	  height = 450;

class Graph extends Component {
    componentDidMount() {
        if (this.props.graphType === 'bar') {
            this.barGraph(bar_data);
        } else {
            this.donutGraph(donut_data);
        }
    }
    
    barGraph(graphData) {
        const sum = graphData.reduce((acc, curr) => acc + curr.amt, 0);
		const colorWheelRatio = Math.floor(sum / 360);
		d3.select(this.barContainer)
		  .selectAll('.bar')
		  .data(graphData)
		  .enter()
		  .append('div')
		  .attr('class', 'bar-item')
		  .style('width', (d) => {
		    return `${d.amt / sum * 100}%`;
		  })
		  .style('background-color', (d, index) => {
		  	return `hsl(${index*colorWheelRatio}, 40%, 50%)`;
		  });
    }

    donutGraph(graphData) {
		const pieSvg = d3.select(this.donutPieGraph)
			// .attr('width', width)
			// .attr('height', height)
         	.attr('preserveAspectRatio','xMinYMin');

        const createGradients = (defs, colors, r) => {  
			let gradient = defs.selectAll('.gradient')
				.data(colors).enter().append("radialGradient")
				.attr("id", (d,i) => "gradient" + i)
				.attr("gradientUnits", "userSpaceOnUse")
				.attr("cx", "0").attr("cy", "0").attr("r", r).attr("spreadMethod", "pad");

			gradient.append("stop").attr("offset", "0%").attr("stop-color", (d) => d);

			gradient.append("stop").attr("offset", "30%")
			.attr("stop-color", (d) => d)
			.attr("stop-opacity", 1);

			gradient.append("stop").attr("offset", "80%")
			.attr("stop-color", (d) => 'black')
			.attr("stop-opacity", 1);
		};

		const pieWidth = pieSvg.attr('width');
		const pieHeight = pieSvg.attr('height');

		const radius = Math.min(pieWidth, pieHeight) / 2;

		pieSvg.html('');

		const g = pieSvg.append("g").attr("transform", "translate(" + pieWidth / 2 + "," + pieHeight / 2 + ")");
		
		createGradients(g.append("defs"), graphData.map((d) => { return d.color; }), 2.5 * 200 );
		
		const pie = d3.pie().sort(null).value(d => d.total);

		const path = d3.arc().outerRadius(radius - 10).innerRadius(0).padAngle(0.02);

		const arc = g.selectAll(".arc")
		    .data(pie(graphData))
		    .enter().append("g")
		    .attr("class", "arc");

		arc.append("path")
			.attr("d", path)
			.attr("fill", (d, i) => { return "url(#gradient"+ i+")";});

		const innerCircle = g.append('circle');
		innerCircle.attr('r', radius - 70);
		innerCircle.attr('fill', '#fff');
	}
    
    render() {
        const {graphType, barClass} = this.props;
        return (
            <React.Fragment>
                {graphType === 'bar' ? 
                    <div className={`bar ${barClass}`} ref={(barContainer) => this.barContainer = barContainer}></div>
                    :
                    <svg  
                        className={`pie`} 
                        width="450" 
                        height="350" 
                        // viewBox={`0 0 ${width} ${height}`}
                        viewBox={`0 0 450 350`}
                        ref={(donutPieGraph) => this.donutPieGraph = donutPieGraph}>
                    </svg>
                }
            </React.Fragment>
        );
    }
}

export default Graph;