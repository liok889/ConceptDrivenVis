<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale = 1.0, user-scalable=no">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<style type="text/css">

#open-child-window {
	width: 300px;
	display: block;
	margin: 40px auto 0 auto;
}

#messages-container {
	max-width: 600px;
	margin: 40px auto 0 auto;
	overflow: hidden;
	display: none;
}

h4 {
	margin: 0 0 20px 0;
	text-align: center;
}

#message-to-outer {
	width: 100%;
	background-color: #f8f8f8;
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
	height: 20px;
	display: block;
	box-sizing: border-box;
	width: 100%;
}

#message-from-outer {
	width: 30%;
	background-color: #e9e9e9;
	padding: 5px;
	box-sizing: border-box;
	float: right;
}

#message-from-container {
	height: 150px;
	overflow: auto;
}

</style>
</head>

<body>

<button id="open-child-window" style="position:absolute;left:350px;top:10px;width:200px">Start Client Window</button>
<button id="close-child-window" style="position:absolute;left:650px;top:50px;width:200px">Close Client Window</button>

<div id="messages-container" style="position:absolute; top:100px;left:300px;height:200px;width:1000px">
	<div id="message-to-outer">
		<div id="message-to-container">
			<textarea id="message"></textarea>
			<!--<button id="send-message-child">Send Message to Client</button>-->
		</div>
	</div>
</div>
	<div id="message-from-outer" style="position:absolute; top:400px;left:300px;height:200px;width:600px" >
		<h4>Requirements from User</h4>
		<div id="message-from-container"></div>
	</div>

	<div style="position:absolute;top:620px;left:500px" >
		<button id="PostImage" class="button">Send The Image</button>
	</div>

<script>

// This will hold the handle of the child window
var __CHILD_WINDOW_HANDLE = null;
$("#messages-container").show();

$("#open-child-window").on('click', function() {
	__CHILD_WINDOW_HANDLE = window.open('Client.html','_blank');

	$("#messages-container").show();

})

/*$("#send-message-child").on('click', function() {
	if($.trim($("#message").val()) != '') {
		__CHILD_WINDOW_HANDLE.ProcessParentMessage($("#message").val());
		$("#message").val('');
	}
});*/

function ProcessChildMessage(message) {
	$("#message-from-container").append('<div>' + message + '</div>');
}

$("#close-child-window").on('click', function() {
	__CHILD_WINDOW_HANDLE.close();

})

$("#PostImage").click(function(){
	if($.trim($("#message").val()) != '') {
		__CHILD_WINDOW_HANDLE.ProcessParentMessage($("#message").val());
		$("#message").val('');
	}
	$("#loading").css("display","none");
	__CHILD_WINDOW_HANDLE.EnableButton();
});

</script>

</body>
</html>