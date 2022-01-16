var pomodoroBtn = document.querySelector(".pomodoro-btn");
var shortBreakBtn = document.querySelector(".short-break-btn");
var longBreakBtn = document.querySelector(".long-break-btn");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");

pomodoroBtn.addEventListener("click", function() {
	minutes.innerHTML = "25";
	seconds.innerHTML = "00";
	pomodoroBtn.classList.add("selected");
	shortBreakBtn.classList.remove("selected");
	longBreakBtn.classList.remove("selected");
});

shortBreakBtn.addEventListener("click", function() {
	minutes.innerHTML = "05";
	seconds.innerHTML = "00";
	pomodoroBtn.classList.remove("selected");
	shortBreakBtn.classList.add("selected");
	longBreakBtn.classList.remove("selected");
});

longBreakBtn.addEventListener("click", function() {
	minutes.innerHTML = "15";
	seconds.innerHTML = "00";
	pomodoroBtn.classList.remove("selected");
	shortBreakBtn.classList.remove("selected");
	longBreakBtn.classList.add("selected");
});