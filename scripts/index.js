var pomodoroBtn = document.querySelector(".pomodoro-btn");
var shortBreakBtn = document.querySelector(".short-break-btn");
var longBreakBtn = document.querySelector(".long-break-btn");
var start = document.querySelector(".start-btn");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");
var currSelected = 1;
var timeLeft=0;
var interval;
var startStop = 0;

pomodoroBtn.addEventListener("click", function() {
	minutes.innerHTML = "25";
	seconds.innerHTML = "00";
	pomodoroBtn.classList.add("selected");
	shortBreakBtn.classList.remove("selected");
	longBreakBtn.classList.remove("selected");
	currSelected = 1;
	clearInterval(interval);
});

shortBreakBtn.addEventListener("click", function() {
	minutes.innerHTML = "05";
	seconds.innerHTML = "00";
	pomodoroBtn.classList.remove("selected");
	shortBreakBtn.classList.add("selected");
	longBreakBtn.classList.remove("selected");
	currSelected = 2;
	clearInterval(interval);
});

longBreakBtn.addEventListener("click", function() {
	minutes.innerHTML = "15";
	seconds.innerHTML = "00";
	pomodoroBtn.classList.remove("selected");
	shortBreakBtn.classList.remove("selected");
	longBreakBtn.classList.add("selected");
	currSelected = 3;
	clearInterval(interval);
});

function assign() {
	if(currSelected == 1) {
		minutes.innerHTML = "25";
		seconds.innerHTML = "00";
	}
	else if(currSelected == 2) {
		minutes.innerHTML = "05";
		seconds.innerHTML = "00";
	}
	else {
		minutes.innerHTML = "15";
		seconds.innerHTML = "00";
	}
}

start.addEventListener("click", function() {
	if(startStop == 0) {
		startStop = 1;
		start.innerHTML = "STOP";

		clearInterval(interval);
		timeLeft=0;
		if(currSelected == 1) {
			timeLeft = 25*60 - 1;
		}
		else if(currSelected == 2) {
			timeLeft = 30 - 1;
		}
		else {
			timeLeft = 15*60 - 1;
		}
		interval = setInterval(timer,1000);
	}
	else if(startStop == 1) {
		if (confirm("Are you sure you want to stop the timer?") == true) {
			clearInterval(interval);
			startStop = 0;
			start.innerHTML = "START";
			assign();
		}
	}
	
});

function timer() {
	if(timeLeft == 0){
	    clearInterval(interval);
	    // var snd = new Audio("./resources/sound.wav");  
	    // snd.loop = true;
    	// snd.play();
	    alert("TIMER ENDED");
	   	assign();
	} else {
		var min=Math.floor(timeLeft/60);
		var sec=Math.floor(timeLeft%60);
		if(min < 10) {
			minutes.innerHTML = "0" + min;
		}
		else {
			minutes.innerHTML = min;
		}
		if(sec < 10){
			seconds.innerHTML = "0" + sec;
		}
		else {
			seconds.innerHTML = sec;
		}
	    
	}
	timeLeft--;
}
