
import Node from './node.js';
import Link from './link.js';
import Filter from './filter.js';

class Graph {
	constructor(id) {
		this.createGraph(id);
	}

	createGraph(id, data, props) {
		props = props || {};
		var width = props.width || 800;
		var height = props.height || 600;
		var margin = { top: 10, right: 10, bottom: 10, left: 10 };

		var svg = d3.select(id).append("svg")

		svg.attr("width", width)
			.attr("height", height)		
			.attr("class", "svg-chart");	

		Filter.createShadowFilter(svg);

		var input = [];
		var output = [{name:'Image', value:null}];
		var node = new Node(svg, { x:10, y:10, title:'Node 1', input:input, output:output});

		var input2 = [];
		var output2 = [{name:'Image', value:null}];
		var node2 = new Node(svg, { x:10, y:200, title:'Node 2', input:input2, output:output2});

		var input3 = [{name:'Image 1', value:node}, {name:'Image 2', value:node2}];
		var output3 = [{name:'Image', value:null}];
		var node3 = new Node(svg, { x:230, y:100, title:'Add', input:input3, output:output3});

		var link = new Link(svg, node.output[0], node3.input[0]);
		var link2 = new Link(svg, node2.output[0], node3.input[1]);
	}

}

export default Graph;
