var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.removeAttribute("loop");
	video.removeAttribute("autoplay");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("The playback spped is now: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.111;
	console.log("The playback spped is now: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log("The current video time location is: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		console.log("The video is not muted");
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		console.log("The video is muted");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	var vol = document.getElementById("slider").value / 100;
	video.volume = vol;
	document.getElementById("slider").innerHTML = (video.volume * 100) + "%";
	console.log("The current volume is : " + (video.volume * 100) + "%");
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Switching to old school")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Switching to original")
});