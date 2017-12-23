
function SliderImplement()
	{
		var svg = d3.select("#SliderSVG"),
		margin = {right: 50, left: 50},
		width = +svg.attr("width") - margin.left - margin.right,
		height = +svg.attr("height");
		
			
		var displayText = ["2010","2011","2012","2013","2014","2015"];

		var x = d3.scaleLinear()
			.domain([2010, 2015])
			.range([0, width])
			.clamp(true);
			
		var slider = svg.append("g")
			.attr("class", "slider")
			.attr("transform", "translate(" + margin.left + "," + height / 2 + ")");

			slider.append("line")
			.attr("class", "track")
			.attr("x1", x.range()[0])
			.attr("x2", x.range()[1])
		  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
			.attr("class", "track-inset")
		  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
			.attr("class", "track-overlay")
			.call(d3.drag()
				.on("start.interrupt", function() { slider.interrupt(); })
				.on("start drag", function() 
				{ 	
					YearVal = hue(x.invert(d3.event.x)); 
				}));

		slider.insert("g", ".track-overlay")
			.attr("class", "ticks")
			.attr("transform", "translate(0," + 18 + ")")
		  .selectAll("text")
		  .data(x.ticks(displayText.length))
		  .enter().append("text")
			.attr("x", x)
			.attr("text-anchor", "middle")
			.text(function(d,i) { return displayText[i]; });

		var handle = slider.insert("circle", ".track-overlay")
			.attr("class", "handle")
			.attr("r", 5)
			.attr("fill","grey");

		function hue(h) {
		  handle.attr("cx", x(h));
		  
		  valueSelected = parseInt(h);
		  return valueSelected;
		 
		}
		
	}
