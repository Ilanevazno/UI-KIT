import $ from 'jquery';
import './donut.scss';

$(document).on("DOMContentLoaded", () => {
  const targetContainer = $("#donut-chart__item");
  const data = {
    targetWidth: $(targetContainer).width(),
    targetContainer: targetContainer[0],
    data: [{
      "label": "first",
      "value": 30, 
      "colour": "#4eb7a8"
    }, {
      "label": "Second",
      "value": 30, 
      "colour": "#e75735"
    }, {
      "label": "Thid",
      "value": 30, 
      "colour": "#e5e5e5"
    }, {
      "label": "Four",
      "value": 10, 
      "colour": "#747474"
    }]
  }
  renderChart(data);
})


function renderChart (dataObj) {
  // Seed data to populate the donut pie chart
  var seedData = dataObj.data;

  // Define size & radius of donut pie chart
  var sizer = dataObj.targetWidth;
  var width = sizer,
    height = sizer,
    radius = Math.min(width, height) / 2;

  // Define arc colours
  var colour = d3.scaleOrdinal(d3.schemeCategory20);

  // Define arc ranges
  var arcText = d3.scaleOrdinal()
    .range([0, width]);

  // Determine size of arcs
  var arc = d3.arc()
    .innerRadius(radius - 35)
    .outerRadius(radius - 10);

  // Create the donut pie chart layout
  var pie = d3.pie()
    .value(function(d) {
      return d["value"];
    })
    .sort(null);

  // Append SVG attributes and append g to the SVG
  var svg = d3.select(dataObj.targetContainer)
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

  // Calculate SVG paths and fill in the colours
  var g = svg.selectAll(".arc")
    .data(pie(seedData))
    .enter().append("g")
    .attr("class", "arc")

  // Make each arc clickable 
  .on("click", function(d, i) {
    //  window.location = seedData[i].link;
    alert("Total " + seedData[i].label + ": " + seedData[i].value)
  });

  // Append the path to each g
  g.append("path")
    .attr("d", arc)
    .attr("fill", function(d, i) {
      return seedData[i].colour;
    });
}