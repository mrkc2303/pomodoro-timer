var pomodoroBtn = document.querySelector(".pomodoro-btn");
var shortBreakBtn = document.querySelector(".short-break-btn");
var longBreakBtn = document.querySelector(".long-break-btn");
var start = document.querySelector(".start-btn");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");
var currSelected = 1;
var timeLeft=0;

pomodoroBtn.addEventListener("click", function() {
	minutes.innerHTML = "25";
	seconds.innerHTML = "00";
	pomodoroBtn.classList.add("selected");
	shortBreakBtn.classList.remove("selected");
	longBreakBtn.classList.remove("selected");
	var currSelected = 1;
});

shortBreakBtn.addEventListener("click", function() {
	minutes.innerHTML = "05";
	seconds.innerHTML = "00";
	pomodoroBtn.classList.remove("selected");
	shortBreakBtn.classList.add("selected");
	longBreakBtn.classList.remove("selected");
	var currSelected = 2;
});

longBreakBtn.addEventListener("click", function() {
	minutes.innerHTML = "15";
	seconds.innerHTML = "00";
	pomodoroBtn.classList.remove("selected");
	shortBreakBtn.classList.remove("selected");
	longBreakBtn.classList.add("selected");
	var currSelected = 3;
});

start.addEventListener("click", function() {
	timeLeft=0;
	if(currSelected == 1) {
		timeLeft = 25*60;
	}
	else if(currSelected == 2) {
		timeLeft = 5*60;
	}
	else {
		timeLeft = 15*60;
	}
	setInterval(timer,1000);
});

function timer() {
	if(timeLeft == 0){
	    minutes.innerHTML = "Finished";
	    seconds.innerHTML = "";
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