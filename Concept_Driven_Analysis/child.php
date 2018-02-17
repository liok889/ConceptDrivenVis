<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale = 1.0, user-scalable=no">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <style type="text/css">
        #messages-container {
            width: 200px;
            margin: 0px;
            overflow: hidden;
            top:50px;
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
            height: 100%;
        }
        #message-to-container textarea {
            min-height: 500px;
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
            margin:20px 0px 20px 20px;
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

<div id="messages-container" style="position:absolute; left:5px;min-height:600px">
    <div id="message-to-outer">

        <div id="message-to-container">
            <textarea id="message"></textarea>
            <button id="send-message-parent"
                    class="button"
                    style="position:absolute; width:150px;height:30px;">
                Submit Request
            </button>
        </div>
    </div>
</div>

<!--<div id="message-from-outer" style="position:absolute; top:550px;left:50px;height:100px">-->
<!--    <h6>Messages from Server</h6>-->
<!--    <div id="message-from-container"></div>-->
<!--</div>-->

<!--		<div style="position:absolute; top:660px;left:240px;width:150px;height:30px" >-->
<!--				<button id="ShowImage" class="button">Show Image</button>-->
<!--		</div>-->

<div id="graph-container" style="position:absolute;left:215px;top:0px;" >

    <!--		<img id="image" class="imageStyle" src=" " > </img>-->
</div>


<script>
    var container = document.getElementById("graph-container");
    DisableButton();
    var counter =1;
    var msg;

    $("#send-message-parent").on('click', function() {
        if($.trim($("#message").val()) != '') {
            window.opener.ProcessChildMessage($("#message").val());
            msg = $("#message").val();
            $("#loading").css("display","block");
            $("#message").val(' ');
            //DisableButton();
            //document.getElementById("PostImage").disabled = false;
            //document.getElementById("PostImage").className = "button";
        }
    });
    function ProcessParentMessage(message) {
        $("#message-from-container").append('<div>' + message + '</div>');
    }
    function DisableButton(){

        //document.getElementById("ShowImage").disabled = true;
        //document.getElementById("ShowImage").className = "buttonFade";
    }
    function EnableButton(){

        //document.getElementById("ShowImage").disabled = false;
        //document.getElementById("ShowImage").className = "button";
        $("#loading").css("display","none");
        addGraph(msg);
        //DisableButton();
    }
    //$myfile = file_get_contents("http://server1/blah/blah/file.log");
</script>

</body>
</html>