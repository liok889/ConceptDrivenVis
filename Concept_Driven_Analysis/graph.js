//connect to the div that contain graphs
//when a user adds another graph, past graph becomes small rectangle with title on top
//all have delete icon and maximize icon, minimize icon
//maybe create a new div when a new graph is added...
var bannerSize = "30px";
function deleteGraph(idNum){
    //remove() the div with same counter number
    $("#graph"+idNum).remove();
    $("#banner"+idNum).remove();
}
function minimize(idNum){
    $("#graph" + idNum).css("display", "none");
}
function maximize(idNum){
    $(".graphDiv").css("display","none");
    $("#graph" + idNum).css("display", "block");

}
function createBanner(msg){
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
    title.style.width = "500px";
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
    newDiv.style.width = "600px";
    newDiv.className = "graphDiv";
    newDiv.id = "graph" + counter;

    var imageDis = document.createElement("IMG");
    //imageDis.src="http://research.vis.ninja/visoz/SampleImage"+counter+".JPG";
    //imageDis.src="http://research.vis.ninja/visoz/SampleImage4.JPG";

    imageDis.src = "SampleImage" + counter + ".jpg";
    imageDis.height = 600;
    imageDis.width = 600;
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

    counter++;
}