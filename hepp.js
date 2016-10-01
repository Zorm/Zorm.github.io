window.addEventListener("load", eventWindowLoaded, false);
function eventWindowLoaded() {

	canvasApp();
}

function canvasApp() {

	var message = "Atari 7800";
	var fillOrStroke ="fill";


	var theCanvas = document.getElementById("canvasOne");
	var context = theCanvas.getContext("2d");

	function drawScreen() {
		//Background

		context.fillStyle = "#000000";
		context.fillRect(0, 0, theCanvas.width, theCanvas.height);

		//Text

		context.font =  "75px bold arial"
		context.textAlign = "center";
		context.textBaseline = "middle";

		var metrics = context.measureText(message);
		var textWidth = metrics.width;
		var xPosition = (theCanvas.width/2);
		var yPosition = (theCanvas.height/2);

		var gradient = context.createLinearGradient( theCanvas.width/2,0,theCanvas.width/2, theCanvas.height);
		for (var i=0; i < colorStops.length; i++) {
			var tempColorStop = colorStops[i];
			var tempColor = tempColorStop.color;
			var tempStopPercent = tempColorStop.stopPercent;
			gradient.addColorStop(tempStopPercent,tempColor);
			tempStopPercent += .015;
			if (tempStopPercent > 1) {
				tempStopPercent = 0;
			}
			tempColorStop.stopPercent = tempStopPercent;;
			colorStops[i] = tempColorStop;
		}


		var tempColor = gradient;


		context.fillStyle    = tempColor;
		context.fillText  ( message,  xPosition ,yPosition);


	}

	function gameLoop() {
			window.setTimeout(gameLoop, 20);
			drawScreen()
	}
	var colorStops = new Array(
	{color:"#FF0000", stopPercent:0},
	{color:"#FFFF00", stopPercent:.125},
	{color:"#00FF00", stopPercent:.375},
	{color:"#0000FF", stopPercent:.625},
	{color:"#FF00FF", stopPercent:.875},
	{color:"#FF0000", stopPercent:1});
	gameLoop();


}
