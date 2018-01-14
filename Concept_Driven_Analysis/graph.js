//connect to the div that contain graphs
//when a user adds another graph, past graph becomes small rectangle with title on top
//all have delete icon and maximize icon, minimize icon
//maybe create a new div when a new graph is added...
var bannerSize = "30px";
var opengraphs = 0;//becomes 1 when a graph is opened; 0 when all are closed
var opengraphsNum = [];//stores currently displayed graphs (opened + closed)
var currentgraph = 0; //id number of the graph that is currently open. will be changed when delete/maximize is called

function deleteGraph(idNum){//remove() the div with same counter number
    $("#graph"+idNum).remove();
    $("#banner"+idNum).remove();

    //find and delete the id num of the graph deleted from opengraphsNum
    for(var i=0;i<opengraphsNum.length;i++){
        if(idNum == opengraphsNum[i]) opengraphsNum.splice(i,1);
    }

    // //display the graph at the bottom if none of the graphs are opened
    if(opengraphs == 0 || currentgraph == idNum) {
        var num = opengraphsNum[opengraphsNum.length - 1];
        $("#graph" + num).css("display", "block");
        opengraphs = 1;
    }
    opengraphs = 0;
}
function minimize(idNum){
    $("#graph" + idNum).css("display", "none");
    opengraphs = 0;
}
function maximize(idNum){
    $(".graphDiv").css("display","none");
    $("#graph" + idNum).css("display", "block");
    opengraphs = 1;
    currentgraph = idNum;
}
function createBanner(msg){//create header for each div, which contains icons and title
    var closeIcon = document.createElement("IMG");
    var maxIcon = document.createElement("IMG");
    var minIcon = document.createElement("IMG");

    closeIcon.src="close.png";
    maxIcon.src="max.png";
    minIcon.src="min.png";

    closeIcon.className = "icon del";
    maxIcon.className = "icon max";
    minIcon.className = "icon min";

    closeIcon.id = "delIc"+counter;
    maxIcon.id = "maxIc" +counter;
    minIcon.id = "minIc" + counter;

    var banner = document.createElement("div");
    banner.className = "banner";
    banner.id = "banner"+counter;

    var title = document.createElement("div");
    title.style.height = bannerSize;
    title.id = "titleDiv"+counter;
    title.style.width = "750px";
    //title.style.padding = "0px 500px 0px 0px";
    //title.style.backgroundColor = "red";

    var titleText = document.createElement("p");
    titleText.style.fontSize = "15px";
    titleText.id = "titleText"+counter;

    //add icons (close, min, max)
    var iconDiv = document.createElement("div");
    iconDiv.style.height= bannerSize;
    iconDiv.id = "iconDiv"+counter;
    //iconDiv.style.backgroundColor = "green";

    //add title
    container.appendChild(banner);

    banner.appendChild(title);
    title.appendChild(titleText);
    banner.appendChild(iconDiv);


    $("#iconDiv"+counter).append(closeIcon);
    $("#iconDiv"+counter).append(maxIcon);
    $("#iconDiv"+counter).append(minIcon);
    $("#titleText"+counter).text(msg);

}
function addGraph(msg) {
    //receive image address and put it in a new div
    //minimize other graphs
    //display the div to the fullest size
    if (counter > 1) {
        for (var i = 1; i < counter; i++) {
            $("#graph" + i).css("display", "none");
        }
    }
    createBanner(msg);

    var newDiv = document.createElement("div");
    newDiv.style.height = "600px";
    newDiv.style.width = "800px";
    newDiv.className = "graphDiv";
    newDiv.id = "graph" + counter;

    var imageDis = document.createElement("IMG");
    //imageDis.src="http://research.vis.ninja/visoz/SampleImage"+counter+".JPG";
    //imageDis.src="http://research.vis.ninja/visoz/SampleImage4.JPG";

    imageDis.src = "SampleImage" + counter + ".jpg";//currently located local
    imageDis.height = 600;
    imageDis.width = 950;
    imageDis.className = "graph";
    //imageDis.class = "graph";
    imageDis.id = "image" + counter;

    container.appendChild(newDiv);
    $("#graph" + counter).append(imageDis);

    //when an icon is clicked
    $(".del").click(function () {
        //num : to find out which graph should be changed. it returns the id number
        var name = this.id;
        var num = name.slice(-1);
        deleteGraph(num);
    });
    $(".max").click(function () {
        var name = this.id;
        var num = name.slice(-1);
        maximize(num);
    });
    $(".min").click(function () {
        var name = this.id;
        var num = name.slice(-1);
        minimize(num);
    });
    //when a new graph is added, other graphs closes automatically.
    opengraphsNum.push(counter);
    opengraphs = 1;
    currentgraph = counter;
    counter++;

}