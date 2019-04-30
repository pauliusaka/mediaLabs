var player1 = document.getElementById("my_video_1");
var player2;
var count=0;
function Play() {
	player1.play();
}
function Pause() {
	player1.pause();
}
function Stop() {
	player1.pause();
	player1.currentTime(0);
}
function Forward() {
	var tmp = player1.currentTime();
	player1.currentTime(tmp+5);
}
function Backward() {
	var tmp = player1.currentTime();
        player1.currentTime(tmp-5);
}
function Load(id) {
	if (id==="btn1") {
		player1 = videojs('my_video_1');
		var name = ["Play", "Pause", "Stop", "Forwards", "Backwards"];
		var action = [
				function(){ Play() },
				function(){ Pause() },
				function(){ Stop() },
				function(){ Forward() },
				function(){ Backward() }
		];
		for (i=0; i<5; i++){
			var button = document.createElement("button");
			button.onclick = action[i];
			button.innerHTML = name[i];
			var buttonDiv = document.getElementById("buttons");
			buttonDiv.appendChild(button);
		}
	}
	else if (id==="btn2") {	
		player2 = document.createElement("video-js");
		player2.setAttribute("class","vjs-default-skin");
		player2.setAttribute("id","my_video_2");
		player2.setAttribute("width","640");
		player2.setAttribute("height","268");
		player2.setAttribute("controls","controls");
		var source = document.createElement("source");
		source.type = "application/x-mpegURL";
		source.src = document.getElementById("myText2").value;
		player2.appendChild(source);
		var videoDiv = document.getElementById("video");
		videoDiv.appendChild(player2);
		player2 = videojs('my_video_2');
	}
}
