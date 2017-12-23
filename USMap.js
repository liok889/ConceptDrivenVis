<!DOCTYPE html>
<html>
<head>
	<title>Cognitive Biases</title>
	<style>
	.states {
		fill: #f0f0f0;//#bdc9e1;
		stroke: #737373;//#fff;
		stroke-width:1px;
	}
	.cities {
		//opacity:0.5;
	}	
	div.tooltip {   
	 	position: absolute;           
		text-align: left;           
		width: 100px;                  
		height: 20px;                 
		padding: 2px;             
		font: 12px sans-serif;        
		background: none;   
		border: 1px;      
		border-radius: 8px;           
		pointer-events: none;         
	}
	div.ScatterTooltip {   
	 	position: absolute;
		height: auto;
		padding: 5px;
		background-color: white;
		-webkit-border-radius: 10px;
		-moz-border-radius: 10px;
		border-radius: 10px;
		-webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
		-moz-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
		box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
		pointer-events: none;
		z-index:99;      
	}
	rect {
		/*	fill: lightgray;*/
			stroke: darkgray;
			stroke-width: 1px;
			border: 0px #b30000;
			
        }
	/* slider -start*/
	.ticks {
	  font: 10px sans-serif;
	}

	.track,
	.track-inset,
	.track-overlay {
	  stroke-linecap: round;
	}

	.track {
	  stroke: #000;
	  stroke-opacity: 0.3;
	  stroke-width: 10px;
	}

	.track-inset {
	  stroke: #ddd;
	  stroke-width: 8px;
	}

	.track-overlay {
	  pointer-events: stroke;
	  stroke-width: 50px;
	  cursor: crosshair;
	}

	.handle {
	  fill: #fff;
	  stroke: #000;
	  stroke-opacity: 0.5;
	  stroke-width: 1.25px;
	}
	
	.track1,
	.track1-inset,
	.track1-overlay {
	  stroke-linecap: square;
	  
	}

	.track1 {
	  stroke: #4575b4;
	  stroke-opacity: 0.7;
	  stroke-width: 10px;
	}

	.track1-inset {
	  stroke: #e0f3f8;
	  stroke-width: 8px;
	}

	.track1-overlay {
	  pointer-events: stroke;
	  stroke-width: 50px;
	  cursor: crosshair;
	}

	.handle1 {
	  fill: #fff;
	  stroke: #000;
	  stroke-opacity: 0.5;
	  stroke-width: 1.25px;
	}
	
	.activeButt {
		background-color: #f2f0f7 !important;
	}
	
	/* scatter Plot */
	.axis path,
	.axis line {
	  fill: none;
	  stroke: #000;
	  shape-rendering: crispEdges;
	}

	.dot {
	  stroke: #000;
	}

	scatter.tooltip {
	  position: absolute;
	  width: 100px;
	  height: 28px;
	  pointer-events: none;
	  opacity: 1;
	}
	/* scatter plot -end*/
	
	/*for brushing*/
	.point {
	  fill: #2f225d;
	  stroke: #afa2dc;
	}

	/*.selected {
	  fill: #afa2dc;
	  stroke: #2f225d;
	}*/

		p {
	  font: 12px sans-serif;
	/*  margin: 0 0 2px 0;
	  padding: 0;*/
	}

	.clear-button {
	  font: 14px sans-serif;
	  cursor: pointer;
	}

	.brush .extent {
	  stroke: #fff;
	  fill-opacity: .125;
	  shape-rendering: crispEdges;
	}
	rect.overlay{
	stroke : none;
	}
	/*end brushing*/
	
	/*for box plot - start*/
	body {
	  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	}
	.box {
	  font: 10px sans-serif;
	}
	.box line,
	.box rect,
	.box circle {
	  fill: steelblue;
	  stroke: #000;
	  stroke-width: 1px;
	}
	.box .center {
	  stroke-dasharray: 3,3;
	}
	.box .outlier {
	  fill: none;
	  stroke: #000;
	}
	.axis {
	  font: 12px sans-serif;
	}
	 
	.axis path,
	.axis line {
	  fill: none;
	  stroke: #000;
	  shape-rendering: crispEdges;
	}
	 
	.x.axis path { 
	  fill: none;
	  stroke: #000;
	  shape-rendering: crispEdges;
	}

	/* for box plot -end*/
	
	/*for highlighting SVG*/

	
	.shadow {
		width: 120px;
		height: 330px;		
		//padding: 10px;
		//position:absolute;
		//top: 60px;
	}

	.shadow:hover {
		-moz-box-shadow: 0 0 5px rgba(0,0,0,0.5);
		-webkit-box-shadow: 0 0 5px rgba(0,0,0,0.5);
		border: 1px solid #ccc;
		box-shadow: 0 0 5px rgba(0,0,0,0.5);
	}
	
	.shadowLine {
		width: 120px;
		height: 275px;		
		//padding: 10px;
		//position:absolute;
		//top: 20px;
	}

	.shadowLine:hover {
		-moz-box-shadow: 0 0 5px rgba(0,0,0,0.5);
		-webkit-box-shadow: 0 0 5px rgba(0,0,0,0.5);
		border: 1px solid #ccc;
		box-shadow: 0 0 5px rgba(0,0,0,0.5);
	}
	
	
	.shadowOnClick {
		width: 120px;
		height: 330px;		
		-moz-box-shadow: 0 0 5px rgba(0,0,0,0.5);
		-webkit-box-shadow: 0 0 5px rgba(0,0,0,0.5);
		box-shadow: 0 0 5px rgba(0,0,0,0.5);
	}
	
	.selectOnClick {
		width: 120px;
		height: 330px;		
		-moz-box-shadow: 0 0 5px rgba(0,0,0,0.5);
		-webkit-box-shadow: 0 0 5px rgba(0,0,0,0.5);
		box-shadow: 0 0 5px rgba(0,0,0,0.5);
		background-color: #f0f0f0;
	}
	/*for highlighting-svg end*/
	
		
	.shadowSorter {
		width: 40px;
		height: 40px;		
		//padding: 10px;
		//position:absolute;
		//top: 60px;
	}

	.shadowSorter:hover {
		-moz-box-shadow: 0 0 5px rgba(0,0,0,0.5);
		-webkit-box-shadow: 0 0 5px rgba(0,0,0,0.5);
	//	border: 1px solid #ccc;
		box-shadow: 0 0 5px rgba(0,0,0,0.5);
	}
	
	/*highlight button*/
	.butta {
		background-color : red;
	}
	
	/*Line-chart*/
	body { font: 12px Arial;}
	
	// for points on line chart
	
	.focus circle {
	  fill: #F1F3F3;
	  stroke: #6F257F;
	  stroke-width: 5px;
	}
	
	//for legend
	.legend {
		position:absolute;
		left:800px;
		top:350px;
	}
	
		
	</style>

</head>
<body>
	<script src="https://d3js.org/d3.v4.min.js"></script>
	<script src="http://d3js.org/topojson.v1.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> 
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="https://d3js.org/d3-interpolate.v1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
	<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/9.7.3/bootstrap-slider.js"></script>-->
	<script type="text/javascript" src="BarChart.js"></script>
	<script type="text/javascript" src="Slider.js"></script>
	<script type="text/javascript" src="ExtractData.js"></script>
	<script type="text/javascript" src="UpdateBarChart.js"></script>
	<script type="text/javascript" src="ScatterPlot.js"></script>
	<script type="text/javascript" src="UpdateScatterPlot.js"></script>
	<script type="text/javascript" src="SortBarChart.js"></script>
	<script type="text/javascript" src="AboutVariables.js"></script>
	<script type="text/javascript" src="box.js"></script>
	<script type="text/javascript" src="BoxPlot.js"></script>
	<script type="text/javascript" src="main.js"></script>
	<script type="text/javascript" src="ScatterSlider.js"></script>
	<script type="text/javascript" src="LineChart.js"></script>
	<script type="text/javascript" src="UpdateLineChart.js"></script>	
	<script type="text/javascript" src="MapScale.js"></script>
	<script type="text/javascript" src="UpdateMapScale.js"></script>
	<script type="text/javascript" src="DataLogging.js"></script>
		
	<div class="panel panel-info" id="barcharts" style="position: absolute; left: 580px; top: 45px;width:1000px;height:340px">
		<div id ="headingPanel" class="panel-heading text-top" style="position:absolute;height:30px;width:80px">Data </div>
		  
		<div class="panel-body" id="PanelBody">
			<div id ="YearBar" style="position: absolute; font-size:20px; top:50px;left:25px ; width:800px;height:300px"  >
	 
			</div>
			<div id ="DisplayBar" >
	 
				</div>
			<div id ="BarCharts">
				
			</div>
		</div>
	</div>	
	
	<!--<div id ="LogData" style="position:absolute; top: 5px; left: 1400px; width:50px;height:20px;">
		<button id="LogData" 
				style="background-color:#f0f0f0;color:#636363;" 
				class="btn btn-primary dropdown-toggle" 
				type="button" data-toggle="dropdown">Log Data
				<span class="caret"></span>
		</button>
	 
	</div>-->
	
	<!--<div id="sort" style = "position:absolute; font-size:10px"> 
			<button id="Sort" style="position:absolute; top: 400px; left: 40px; width:50px;height:20px;background-color:#cbc9e2;"> Sort</button>
		</div>--> 
		<div id="sorting">
	 </div>
	 <!--<div id ="Variable" style="position: absolute; font-size:15px; top:200px;left:25px ; width:100px;height:50px"  >
	 
	 </div>-->
	</svg>
	<svg id="main" width="600" height="300" style="position: absolute; left: 10px; top: 100px" >

	</svg>
	<div class="panel panel-success" id="mapScale" style="position: absolute; left:5px; top: 100px;width:60px;height:640px">
		<svg id="mapScaleSVG" width="50" height="600" style="position: absolute; left:5px; top: 10px" >

		</svg>
	</div>
	
	<svg id="SliderSVG" width="500" height="50" style="position: absolute; left: 80px; top: 50px" >
			
	</svg>
	
	<div class="panel panel-success" id="scatterPlot" style="position: absolute; left:70px; top: 389px;width:505px;height:340px">
		<!--<div id ="headingScatter" class="panel-heading">Scatter Plot</div>-->
			<div class="panel-body"> 
				<div id ="YearScatter" style="position: absolute; font-size:20px; top:50px;left:25px ; width:300px;height:200px"  >
	 
				</div>
				
				<div id ="DisplayScatter" >
	 
				</div>
				<svg id="ScatterSVG" width="400" height="330" style="position: absolute; left: 60px; top: 0px;" ></svg>
				
				<svg id="ScatterSlideX" width="450" height="30" style="position: absolute; left: 70px; top: 310px"> </svg>
				
				<svg id="ScatterSlideY" width="30" height="320" style="position: absolute; left: 30px; top: 10px"> </svg>
				
			</div>			
		</div> 
		<div class="collapse navbar-collapse" id="sortClear">
			 <ul class="dropdown-menu" >
					<li><a href="#">Action</a></li>
					<li><a href="#">Another action</a></li>
			</ul>
		</div>
	
	
	<div class="panel panel-default" id="boxplots" style="position: absolute; left: 580px; top: 390px;width:1000px;height:335px">
		<div id ="headingPanel" class="panel-heading" style="position:absolute;height:40px;width:80px">TimeLine</div>
		<div class="panel-body">
			<div id = "LineChart"></div>
		
		</div>
	</div>
	
	<div class="container1" style="position:absolute; top:3px;left:75px;">
	
		<div class="dropdown">
			<button id="SubstanceAbuse" 
				style="background-color:#e0f3db;color:green;" 
				class="btn btn-primary dropdown-toggle" 
				type="button" data-toggle="dropdown">Substance Abuse
				<span class="caret"></span>
			</button>
		<ul class="dropdown-menu">
			  <li><a href="#" id="OpioidMR">Opioid MR </a></li> 		  
			   <li><a href="#" id="AdultBinge" >Adult Binge</a></li>
			  <li><a href="#" id ="TeenBinge" >Teen Binge</a></li>			
		</ul>
	  </div>	
	</div> 
		
	<div class="container2" style="position:absolute; top:3px;left:228px;">
	  <div class="dropdown">
		<button id="Cancer" 
				style="background-color:#e0f3db;color:green" 
				class="btn btn-primary dropdown-toggle" 
				type="button" data-toggle="dropdown">Cancer
		<span class="caret"></span></button>
		<ul class="dropdown-menu">
		  <li><a href="#" id ="AllCancer">All</a></li>
		  <li><a href="#" id ="FemBreastCancer">Breast Cancer</a></li>
		  <li><a href="#" id ="LungCancer">Lung Cancer</a></li>
		</ul>
	  </div>	
	</div>
	
	<div class="container3" style="position:absolute; top:3px;left:315px;>
	  <div class="dropdown">
		<button id="ChronicDisease" 
				style="background-color:#e0f3db;color:green" 
				class="btn btn-primary dropdown-toggle" 
				type="button" data-toggle="dropdown">Chronic Disease
		<span class="caret"></span></button>
		<ul class="dropdown-menu">
		  <li><a id ="AsthamaMR" href="#">Asthama</a></li>
		  <li><a id ="DiabetesMR" href="#">Diabetes</a></li>
		  <li><a id ="HeartDiseaseMR" href="#">Heart Disease</a></li>
		  <li><a id ="AdultObesity" href="#">Adult Obesiy</a></li>
		  <li><a id ="AdultSmoking" href="#">Adult Smoking</a></li>
		  <li><a id ="TeenSmoking" href="#">Teen Smoking</a></li>
		  <li><a id ="TeenObesity" href="#">Teen Obesity</a></li>
		</ul>
	  </div>	
	</div>
	<div class="container4" style="position:absolute; top:3px;left:460px;>
	  <div class="dropdown">
		<button id="FoodSafety" 
				style="background-color:#e0f3db;color:green" 
				class="btn btn-primary dropdown-toggle" 
				type="button" data-toggle="dropdown">Food Safety
		<span class="caret"></span></button>
		<ul class="dropdown-menu">
		  <li><a id ="Salmonella" href="#">Salmonella Infection</a></li>
		  <li><a id ="EColi" href="#">E.Coli Infection</a></li>
		</ul>
	  </div>	
	</div>
	
	<div class="container4" style="position:absolute; top:3px;left:578px;>
	  <div class="dropdown">
		<button id="Financial" 
				style="background-color:#e0f3db;color:green" 
				class="btn btn-primary dropdown-toggle" 
				type="button" data-toggle="dropdown">Financial
		<span class="caret"></span></button>
		<ul class="dropdown-menu">
		  <li><a id ="Income" href="#">Income</a></li>
		   <li><a id ="HousingCost" href="#">Housing Cost</a></li>
		   <li><a id ="PovertyLevel" href="#">Poverty Level</a></li>
		   <li><a id ="ChildPoverty" href="#">Child Poverty</a></li>
		   <li><a id ="Unemployment" href="#">Unemployment</a></li>
		</ul>
	  </div>	
	</div>
	<div class="container4" style="position:absolute; top:3px;left:675px;>
	  <div class="dropdown">
		<button id="People" 
				style="background-color:#e0f3db;color:green" 
				class="btn btn-primary dropdown-toggle" 
				type="button" data-toggle="dropdown">People
		<span class="caret"></span></button>
		<ul class="dropdown-menu">
		  <li><a id ="AgingPopulation" href="#">Aging Population</a></li>
		   <li><a id ="ForeignBorn" href="#">Foreign Born</a></li>
		   <li><a id ="YouthPopulation" href="#">Youth Population</a></li>
		   <li><a id ="UninsurePopulation" href="#">Uninsure Population</a></li>
		 <!--  <li><a id ="Race" href="#">Race</a></li>
		  <li><a id ="Sex" href="#">Sex</a></li>-->
		</ul>
	  </div>	
	</div>
	<div class="container5" style="position:absolute; top:3px;left:760px;>
	  <div class="dropdown">
		<button id="Education" 
				style="background-color:#e0f3db;color:green" 
				class="btn btn-primary dropdown-toggle" 
				type="button" data-toggle="dropdown">Education
		<span class="caret"></span></button>
		<ul class="dropdown-menu">
		  <li><a id ="TotalEd" href="#">Total Education</a></li>
		   <li><a id ="EnglishSpeaking" href="#">English Speaking</a></li>
		   <li><a id ="SpanishSpeaking" href="#">Spanish Speaking</a></li>
		   <li><a id ="PreschoolEnroll" href="#">Preschool Enrollment</a></li>
		<!--   <li><a id ="TotalPop" href="#">Total Population</a></li> -->
		</ul>
	  </div>	
	</div>
	<div class="container6" style="position:absolute; top:3px;left:863px;>
	  <div class="dropdown">
		<button id="InfectiousDisease" 
				style="background-color:#e0f3db;color:green" 
				class="btn btn-primary dropdown-toggle" 
				type="button" data-toggle="dropdown">Infectious Disease
		<span class="caret"></span></button>
		<ul class="dropdown-menu">
		  <li><a id ="PneumoniaVac" href="#">Pneumonia(Age 65+)</a></li>
		   <li><a id ="AdultFluVac" href="#">Adult Flu</a></li>
		   <li><a id ="ChildFluVac" href="#">Child FLu</a></li>
		   <li><a id ="PneumoniaInfluenzaMR" href="#">Pneumonia + Influenza</a></li>
		   <li><a id ="TuberculosisIR" href="#">Tuberculosis</a></li>
		</ul>
	  </div>	
	</div>

	<div class="container7" style="position:absolute; top:3px;left:1020px;>
	  <div class="dropdown">
		<button id="Injury" 
				style="background-color:#e0f3db;color:green" 
				class="btn btn-primary dropdown-toggle" 
				type="button" data-toggle="dropdown">Injury
		<span class="caret"></span></button>
		<ul class="dropdown-menu">
		  <li><a id ="FirearmMR" href="#">Firearm</a></li>
		   <li><a id ="HomicideMR" href="#">Homicide</a></li>
		   <li><a id ="MotorVehicleMR" href="#">Motor Vehicle</a></li>
		   <li><a id ="SuicideMR" href="#">Suicide Rate</a></li>
		</ul>
	  </div>	
	</div>
	
	<div class="container8" style="position:absolute; top:3px;left:1097px;>
	  <div class="dropdown">
		<button id="Life" 
				style="background-color:#e0f3db;color:green" 
				class="btn btn-primary dropdown-toggle" 
				type="button" data-toggle="dropdown">Life
		<span class="caret"></span></button>
		<ul class="dropdown-menu">
		  <li><a id ="DeathR" href="#">Death Rate</a></li>
		   <li><a id ="LifeExpectancy" href="#">Life Expectancy</a></li>
		</ul>
	  </div>	
	</div>

	 <div id ="submenu" >
	 
	 </div>
  
	 <div id ="AboutMenu" style="position: absolute; font-size:20px; top:200px;left:25px ; width:300px;height:100px"  >
	 
	 </div>

  <script>
   	
	var SubstanceAbuse = [];
	var Cancer = [];
	var ChronicDisease = [];
	var FoodSafety = [];
	var Financial = [];
	var People = [];
	var Education=[];
	var InfectiousDisease = [];
	var Injury=[];
	var Life=[];

	var TotalVariables = [];
	
	var prevTime=0;
	
	var DefaultYear = 2013;
	var YearVal = DefaultYear;
	
	var BarColors = ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f"];
	var MapColors = ["#feb24c","#800026"];
	
	var USCities = ["Atlanta (Fulton County), GA",
					"Boston, MA",
					"Denver, CO",
					//"Fort Worth (Tarrant County), TX",// removed
					"Houston, TX",
					"Las Vegas (Clark County), NV",
					"Los Angeles, CA",
					"Miami (Miami-Dade County), FL",
					"Minneapolis, MN",
					"New York City, NY",
					//"Oakland, CA", // removed
					"Phoenix, AZ",
					"Portland (Multnomah County), OR",
					"San Antonio, TX",
					"San Diego County, CA",
					"Washington, DC",
					//"Baltimore, MD", // removed
					"Chicago, IL",
					"Detroit, MI",
					"Kansas City, MO",
					//"Long Beach, CA",//removed
					"Philadelphia, PA",
					//"San Jose, CA", // removed
					"Seattle, WA",
					"San Francisco, CA",
					"Dallas, TX",
					"Cleveland, OH",
					"U.S. Total"
					];
	var USCitiesArray = ["Atlanta",
					"Boston",
					"Denver",
					"Houston",
					"Las Vegas",
					"Los Angeles",
					"Miami",
					"Minneapolis",
					"New York",
					"Phoenix",
					"Portland",
					"San Antonio",
					"San Diego",
					"Washington",
					"Chicago",
					"Detroit",
					"Kansas City",
					"Philadelphia",
					"Seattle",
					"San Francisco",
					"Dallas",
					"Cleveland",
					"U.S. Total"
					];
	
	
	var BarChartVal = { };
	var BarChartVal1 = { };
	var Counter = 1;
	var LineCounter=1;
	
	//var colors = ['#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9'];
	
	var VariablesDisplayed = [];
	var CategoryDisplayed = [];
	
	var VariableGroup = [["Opioid Mortality","OpioidMR",'SubstanceAbuse'],
						 ["Adult Binge","AdultBinge",'SubstanceAbuse'] ,
						 ["Teen Binge", "TeenBinge",'SubstanceAbuse'],
						 ["All Cancer","AllCancer",'Cancer'],
						 ["Breast Cancer","FemBreastCancer",'Cancer'],
						 ["Lung Cancer","LungCancer",'Cancer'],
						 ["Asthma Mortality","AsthamaMR",'ChronicDisease'],
						 ["Diabetes Mortality","DiabetesMR",'ChronicDisease'],
						 ["Heart Disease","HeartDiseaseMR",'ChronicDisease'],
						 ["Adult Obesity","AdultObesity",'ChronicDisease'],
						 ["Adult Smoking","AdultSmoking",'ChronicDisease'],
						 ["Teen Smoking","TeenSmoking",'ChronicDisease'],
						 ["Teen Obesity","TeenObesity",'ChronicDisease'],
						 ["Salmonella","Salmonella",'FoodSafety'],
						 ["EColi","EColi",'FoodSafety'],
						 ["Income","Income",'Financial'],
						 ["Housing Cost","HousingCost",'Financial'],
						 ["Poverty Level","PovertyLevel",'Financial'],
						 ["Child Poverty","ChildPoverty",'Financial'],
						 ["Unemployment","Unemployment",'Financial'],
						 ["Ageing Population","AgingPopulation",'People'],
						 ["Foreign Born","ForeignBorn",'People'],
						 ["Youth Population","YouthPopulation",'People'],
						 ["Uninsured Population","UninsurePopulation",'People'],
						 ["Total Ed","TotalEd",'Education'],
						 ["English Speaking","EnglishSpeaking",'Education'],
						 ["Spanish Speaking","SpanishSpeaking",'Education'],
						 ["Preschool Enrol","PreschoolEnroll",'Education'],
						 ["Pneumonia Vaccination","PneumoniaVac",'InfectiousDisease'],
						 ["Adult Flu Vaccination","AdultFluVac",'InfectiousDisease'],
						 ["Child Flu Vaccination","ChildFluVac",'InfectiousDisease'],
						 ["Pneumonia Influenza MR","PneumoniaInfluenzaMR",'InfectiousDisease'],
						 ["Tuberculosis Mortality Rate","TuberculosisIR",'InfectiousDisease'],
						 ["Firearm Mortality Rate","FirearmMR",'Injury'],
						 ["Homicide Mortality Rate","HomicideMR",'Injury'],
						 ["Motor Vehicle Mortality Rate","MotorVehicleMR",'Injury'],
						 ["Suicide Mortality Rate","SuicideMR",'Injury'],
						 ["Death Rate","DeathR",'Life'],
						 ["Life Expectancy","LifeExpectancy",'Life'] 
						 ];
						 
	var ScatterCurVariable1;
	var ScatterCurVariable2;
	var ScatterCurSubstance1;
	var ScatterCurSubstance2;
	
	var PneumoniaVac = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };
	var ChildFluVac = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };
	var AdultFluVac = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };
	var PneumoniaInfluenzaMR = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };
	var TuberculosisIR = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };
	var FirearmMR = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };
	var HomicideMR = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };
	var MotorVehicleMR = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };
	var SuicideMR = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };
	var DeathR = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };
	var LifeExpectancy = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };
	
	var TotalEd = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };
	var EnglishSpeaking = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };
	var SpanishSpeaking = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };
	var PreschoolEnroll = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };	
	var TotalPop = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };				 

	var Sex = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };
	var Race = {
				Year:[],
				Place:[],
				Sex:[],
				Value:[]
			 };
	var UninsurePopulation = {
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					 };
	var YouthPopulation = {
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					 };
	var ForeignBorn = {
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					 };
	var AgingPopulation = {
							Year:[],
							Place:[],
							Sex:[],
							Value:[]
					 };
	var Salmonella = {
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					 };
	var EColi = {
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					 };
	var Income = {
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					 };
	var HousingCost = {
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					 };
	var PovertyLevel = {
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					 };
	var ChildPoverty = {
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					 };
	var Unemployment = {
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					 };
	var OpioidMR = {
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					};
	var AdultBinge = {
						Year:[],
						Place:[],
						Sex:[],
						Value:[]	
					};
	var TeenBinge = {
						Year:[],
						Place:[],
						Sex:[],
						Value:[]	
					};
	var AllCancer = {
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					};
	var LungCancer = {
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					};
	var FemBreastCancer	= {
							Year:[],
							Place:[],
							Sex:[],
							Value:[]
						  };
	var AsthamaMR = {
						Year:[],
						Place:[],
						Sex:[],
					    Value:[]
					}; 						  
	var DiabetesMR = {
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					 };
	var HeartDiseaseMR = {
							Year:[],
							Place:[],
							Sex:[],
							Value:[]
						  };
	var AdultObesity={
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					 };
	var AdultSmoking={
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					};
	var TeenSmoking={
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					};
	var TeenObesity={
						Year:[],
						Place:[],
						Sex:[],
						Value:[]
					};
					
	var UserData = [];
	
	var barWidth =8;
	
	var RecWidth = 20;
	var	RecHeight = 20;
	
	var MapSVG = d3.select("#main")
	var MapW =  +MapSVG.attr("width");
	var MapH = +MapSVG.attr("height");
	 
	var svg = d3.select("#main").append('g');
	 
	var projection = d3.geoAlbersUsa()
		.scale(600)
		.translate([350, 140]);
		//.translate([MapW/(1.5), (MapH / 4)+10]);
		
	var MapColorScale=d3.scaleLinear();
	 
	var path = d3.geoPath()
		.projection(projection);
	
	d3.queue()
		.defer(d3.json, "states.json")
		.defer(d3.json, "cities.json")
		.defer(d3.csv, "BCHDataSet.csv")
		.await(makeMyMap);

	/*var div = d3.select("body")
					.append("div")   
					.attr("class", "tooltip")               
					.style("opacity", 0.6);*/
	var div = d3.select("#AboutMenu")
				.attr("class", "tooltip")               
					.style("opacity", 0);
	
	var colorCity = ['#cb181d','#a50f15','#67000d','#810f7c','#cb181d','#a50f15','#67000d','#66c2a5','#3288bd',
					 '#f768a1','#dd3497','#ae017e','#7a0177','#49006a','#dd3497','#ae017e','#7a0177','#49006a',
					 '#78c679','#41ab5d','#238443','#006837','#df65b0','#e7298a','#ce1256','#980043','#67001f'];

	//d3.select("#LogData").on("click",function(){
	function LogData(){
	
		console.log(UserData);
		_insertUser(UserData);
		UserData = [];			 
	}
	window.setInterval(LogData, 120000);
	function makeMyMap(error, states,cities,BCHDataSet) {
	
		ExtractData(BCHDataSet);
		
		GetMapData(SubstanceAbuse,DefaultYear,'OpioidMR',cities.features);
		
		MapColorScale.domain([cities.features.min,cities.features.max])
						.range(MapColors);	
			
		svg.append('path')
			.datum(topojson.feature(states, states.objects.usStates))
				.attr('d', path)
				.attr('class', 'states');
		svg.selectAll('.cities')
			.data(cities.features)
			.enter()
			.append('path')
			.attr('d', path.pointRadius(8))
			.attr('class', 'cities')
			//.attr("fill","#045a8d")
			.attr("fill",function(d){return MapColorScale(d.val);})
			.attr("opacity",1)
			.on('mouseover',function(d)
				{
					//log data
					var Date_ = new Date(Date.now());
					LogAction(cities.features.Category_,cities.features.Variable_,d.properties.NAME,
							  "NULL",YearVal,1,11,Date_)
					
					d3.select(this).attr("fill","yellow").attr("opacity",1);
					
					div.attr("id","city")
					.style("font-size", "20px")
					//.style("left", (d3.event.pageX) + "px")		
					//.style("top", (d3.event.pageY - 28) + "px")
					.style("left","70px")		
					.style("top", "285px")
					.style("opacity", 0.7)
					.html(d.properties.NAME);
					
					var IndexCity = d.properties.NAME;
					
					//highlight all rectangles
					var AllRec = d3.select("#BarCharts").selectAll("svg").selectAll('g').selectAll('rect,#City')
									.filter(function(d){return d.City==IndexCity});
																
					AllRec.style("fill","yellow");
								
					//highlight all scatter
					var CityScatt = d3.select("#ScatterSVG").selectAll('g').selectAll('circle')
										.filter(function(d){return d.City == IndexCity});
								
					CityScatt.attr("r",10)
							.style("fill","yellow")
							.style("opacity", 1);
				})
			.on('mouseout',function(d,i)
				{
					//log data
					var Date_ = new Date(Date.now());
					LogAction(cities.features.Category_,cities.features.Variable_,d.properties.NAME,
							  "NULL",YearVal,1,12,Date_)
					
					d3.select(this).attr("fill",function(d){return MapColorScale(d.val);}).attr("opacity",1);
					div.attr("id","city")
					.style("opacity", 0);
					
					var IndexCity = d.properties.NAME;
					
					// remove rectangle highlights
					var AllRec = d3.select("#BarCharts").selectAll("svg").selectAll('g').selectAll('rect,#City')
									.filter(function(d){return d.City==IndexCity});
																
								AllRec.style("fill",colorID);
					
					//remove scatter highlights
					var CityScatt = d3.select("#ScatterSVG").selectAll('g').selectAll('circle')
										.filter(function(d){return d.City == IndexCity});
								
					CityScatt.attr("r",5)
							.style("fill","#969696")
							.style("opacity", 0.9);
					
				})
				.on('click',function(d,i){
					
					var IndexCity = d.properties.NAME;
					for(var i=0;i<VariablesDisplayed.length;i++)
					{
						UpdateLineChart(CategoryDisplayed[i],VariablesDisplayed[i],IndexCity);
					}
					
					//log data
					var Date_ = new Date(Date.now());
					LogAction(cities.features.Category_,cities.features.Variable_,IndexCity,
							  "NULL",YearVal,1,0,Date_);
				
				});
				
				SliderImplement();
				
					
				/*default values - start*/
				VariablesDisplayed.push('OpioidMR');
				CategoryDisplayed.push(SubstanceAbuse);
				drawBarChart(SubstanceAbuse,DefaultYear,'OpioidMR',VariablesDisplayed.length);
				LineChart(SubstanceAbuse,'OpioidMR',USCitiesArray[0],VariablesDisplayed.length);		
				
				CategoryDisplayed.push(SubstanceAbuse);		
				VariablesDisplayed.push('AdultBinge');
				drawBarChart(SubstanceAbuse,DefaultYear,'AdultBinge',VariablesDisplayed.length);
				LineChart(SubstanceAbuse,'AdultBinge',USCitiesArray[0],VariablesDisplayed.length);	
		
				CategoryDisplayed.push(SubstanceAbuse);
				VariablesDisplayed.push('TeenBinge');				
				drawBarChart(SubstanceAbuse,DefaultYear,'TeenBinge',VariablesDisplayed.length);
				LineChart(SubstanceAbuse,'TeenBinge',USCitiesArray[0],VariablesDisplayed.length);
		
				CategoryDisplayed.push(ChronicDisease);
				VariablesDisplayed.push('HeartDiseaseMR');			
				drawBarChart(ChronicDisease,DefaultYear,'HeartDiseaseMR',VariablesDisplayed.length);
				LineChart(ChronicDisease,'HeartDiseaseMR',USCitiesArray[0],VariablesDisplayed.length);
		
				CategoryDisplayed.push(FoodSafety);
				VariablesDisplayed.push('Salmonella');				
				drawBarChart(FoodSafety,DefaultYear,'Salmonella',VariablesDisplayed.length);
				LineChart(FoodSafety,'Salmonella',USCitiesArray[0],VariablesDisplayed.length);
				
				CategoryDisplayed.push(Financial);
				VariablesDisplayed.push('HousingCost');
				drawBarChart(Financial,DefaultYear,'HousingCost',VariablesDisplayed.length);
				LineChart(Financial,'HousingCost',USCitiesArray[0],VariablesDisplayed.length);
				
				CategoryDisplayed.push(Financial);
				VariablesDisplayed.push('ChildPoverty');
				drawBarChart(Financial,DefaultYear,'ChildPoverty',VariablesDisplayed.length);
				LineChart(Financial,'ChildPoverty',USCitiesArray[0],VariablesDisplayed.length);
		
			
				ScatterPlotData('OpioidMR',SubstanceAbuse,'AdultBinge',SubstanceAbuse,DefaultYear);
				ScatterPlot('OpioidMR','AdultBinge',DefaultYear);
				
				/*default values - end*/
				CityYAxis();
				TimeLine();
				
				MapScale(cities.features);
				//UpdateMapColor(SubstanceAbuse,DefaultYear,'OpioidMR');
				
		}
	main();
	function GetMapData(Variable,YearVal,Substance,citiesData)
	{
		var BarChartValue = {};
		var ValueArray = [];
		var GroupIndex;
		
		for(var k=0;k<VariableGroup.length;k++)
		{
			if(Substance==VariableGroup[k][1])
			{
				GroupIndex=k;
				break;
			}
		}
				
		citiesData["Category_"]=VariableGroup[GroupIndex][2];
		citiesData["Variable_"]=VariableGroup[GroupIndex][1];
		
		var minVal;
		var maxVal;
		
		for(var l=0;l<USCitiesArray.length;l++)
		{
			BarChartValue[USCitiesArray[l]] = 0;
		}
		
		for(var j=0;j<Variable[Substance].Value.length;j++)
		{
			if(Variable[Substance].Year[j] == YearVal)
			{
				if(Variable[Substance].Sex[j] == 'Both')// Default value Male- Female
				{
					if(Variable[Substance].Value[j] != 'S')
					{
						for(var k=0;k<USCitiesArray.length;k++)
						{
							if(Variable[Substance].Place[j]==USCitiesArray[k])
							{
								BarChartValue[USCitiesArray[k]] = parseFloat(Variable[Substance].Value[j]);
								
							}
						}
						
					}
					
				}
			}
		}
		for(var j=0;j<USCitiesArray.length;j++)
		{
			ValueArray.push(BarChartValue[USCitiesArray[j]]);
		}
		minVal = d3.min(ValueArray);
		maxVal = d3.max(ValueArray);
		
		for(var k=0;k<citiesData.length;k++)
		{
			for(var j=0;j<USCitiesArray.length;j++)
			{
				if(citiesData[k].properties.NAME == USCitiesArray[j])
				{
					citiesData[k]["val"]= BarChartValue[USCitiesArray[j]];
					break;
				}
			
			}
		}
		
		citiesData["min"] = minVal;
		citiesData["max"] = maxVal;
		
	}
	function UpdateMapColor(Variable,YearVal,Substance)
	{
		
		var NewCitiesData = d3.select("#main").selectAll('g').selectAll('path')
			.filter('.cities').data();
			
		GetMapData(Variable,YearVal,Substance,NewCitiesData);
		
		var CitySel = d3.select("#main").selectAll('g').selectAll('path')
			.filter('.cities').data(NewCitiesData);
			
		var NewCities = CitySel.enter().append();
		
		MapColorScale.domain([NewCitiesData.min,NewCitiesData.max])
					//.range(["#a1d99b","#00441b"]);
				
		CitySel.transition().duration(300)
				.attr("fill",function(d){return MapColorScale(d.val);});
				
		UpdateMapScale(NewCitiesData);
	}
	
</script>
  
</body>


	</html>
