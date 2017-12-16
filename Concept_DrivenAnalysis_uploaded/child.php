<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale = 1.0, user-scalable=no">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<style type="text/css">

#messages-container {
	width: 500px;
	margin: 40px auto 0 auto;
	overflow: hidden;
}

h6 {
	margin: 0 0 20px 0;
	text-align: center;
}

#message-to-outer {
	width: 100%;
	background-color: #ece7f2;
	padding: 5px;
	box-sizing: border-box;
	float: left;
	margin: 0 0 0 0;
}

#message-to-container {
	height: 100px;
}

#message-to-container textarea {
	height: 100px;
	margin: 0 0 20px 0;
	display: block;
	box-sizing: border-box;
	width: 100%;
	resize: none;
}

#message-to-container button {
	height: 30px;
	display: block;
	box-sizing: border-box;
	width: 100%;
}

#message-from-outer {
	width: 32.5%;
	background-color: #e9e9e9;
	padding: 5px;
	box-sizing: border-box;
	float: right;
}

#message-from-container {
	height: 50px;
	overflow: auto;
}
.button {
		background-color: #2b8cbe; /* Green */
		border: none;
		color: white;
		padding: 2px 5px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
	}
	
	.buttonFade {
		background-color: #bdbdbd; /* Green */
		border: none;
		color: white;
		padding: 2px 5px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
	}

</style>
</head>

<body>

<div id="messages-container" style="position:absolute; top:300px;left:50px;height:200px">
	<div id="message-to-outer">
		
		<div id="message-to-container">
			<textarea id="message"></textarea>
			<button id="send-message-parent" 
					class="button"
					style="position:absolute; width:150px;height:30px; left:170px;">
					Submit Request
			</button>
		</div>
	</div>
</div>

	<div id="message-from-outer" style="position:absolute; top:550px;left:50px;height:100px">
		<h6>Messages from Server</h6>
		<div id="message-from-container"></div>
	</div>
	
		<div style="position:absolute; top:660px;left:240px;width:150px;height:30px" >
				<button id="ShowImage" class="button">Show Image</button>
		</div>
		
		<div style="position:absolute;left:800px;top:150px;" >
		<img id="image" class="imageStyle" src=" " > </img>
	</div>


<script>

	DisableButton();
	var counter =1;
	
	$("#send-message-parent").on('click', function() {
		if($.trim($("#message").val()) != '') {
			window.opener.ProcessChildMessage($("#message").val());
            $("#loading").css("display","block");
            //$("#greying").css("display","flex");
			$("#message").val('');
			
			DisableButton();
			
		}
	});

	function ProcessParentMessage(message) {
		$("#message-from-container").append('<div>' + message + '</div>');
	}
	function DisableButton(){
		
		document.getElementById("ShowImage").disabled = true;
		document.getElementById("ShowImage").className = "buttonFade";
	}
	function EnableButton(){
		
		document.getElementById("ShowImage").disabled = false;
		document.getElementById("ShowImage").className = "button";
		
	}

	$("#ShowImage").click(function(){
			var imageDis = document.getElementById("image")
			imageDis.src="ConceptDrivenVis/Concept_DrivenAnalysis_uploaded/SampleImage"+counter+".JPG";
			imageDis.height = 600;
			imageDis.width = 600;
			$("img").show();
			counter++;
		});
    //have the "Oz" paste the link to the popup and send the link as image address
//    $("#ShowImage").click(function(){
//        var imageDis = document.getElementById("image")
//        var txt;
//        var prompt= prompt("Please paste the image address here");
//
//        document.getElementById("demo").innerHTML = txt;
//    });
//    }
</script>

</body>
</html>
