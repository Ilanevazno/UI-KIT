// Seed data to populate the donut pie chart
var seedData = [{
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
  }];
  
  // Define size & radius of donut pie chart
  var sizer = 158;
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
  var svg = d3.select("#donut-chart")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");
  /*
  // Define inner circle
  svg.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 100)
    .attr("fill", "transparent") ;
  */
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
  /*
      // Append text labels to each arc
      g.append("text")
        .attr("transform", function(d) {
          //return "translate(" + arc.centroid(d) + ")";
        var c = arc.centroid(d);
        return "translate(" + c[0]*1.6 +"," + c[1]*1.6 + ")";
        })
        .attr("dy", ".35em")
        .style("text-anchor", "middle")
        .attr("fill", "#fff")
          .text(function(d,i) { return seedData[i].label; })
    
  g.selectAll(".arc text").call(wrap, arcText.range([0, width]));
  
  
  // Append text to the inner circle
  g.append("text")
    .attr("dy", function(d, i) {
      return i + "em"
    })
    //  .style("text-anchor", "middle")
    .attr("class", "inner-circle")
    .attr("fill", function(d, i) {
      return seedData[i].colour;
    })
    .text(function(d, i) {
      return String.fromCharCode(9632) + " " + seedData[i].label
    });
  
  
  svg.append("text")
    .attr("dy", "1.0em")
    .style("text-anchor", "middle")
    .attr("class", "inner-circle")
    .attr("fill", "#36454f")
    .text(function(d) { return 'is lots of fun!'; });
  */
  
  // Wrap function to handle labels with longer text
  function wrap(text, width) {
    text.each(function() {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > 90) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  }
  /*
  $( document ).ready(function() {
    alert( $("g")[4].getBBox().width );
  });
  */
  $('.content').append('<div class="key"></div>');
  var nNc = '<div class="nameNcolour" id="a';
  var clrSq = '<svg class="clrSq"><path d="m0,0 14,0 0,14 -14,0 z"></path></svg>';
  var eD = '</div>';