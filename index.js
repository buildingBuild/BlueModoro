//window.onload = function() {


const time = document.getElementById("time");
const start = document.getElementById("startbutton");
const setting = document.getElementById("settings");
const analytics = document.getElementById("Analytics");
const modal = document.getElementById("modal");
const ResetProgress = document.getElementById("ResetProgress");
const changebackground = document.getElementById("changebackground");
const body = document.getElementById("body");
const newTime = document.getElementById("newTimerNumber");
const motivationalText = document.getElementById("motivationalText");
const longbreakAmount = document.getElementById("longbreakAmount");
// Quotes database
const quotesArr = [
      "IF EVERYONE COULD DO IT, THEN IT WOULD BE EASY",
      "GROWTH BEGINS WHEN COMFORT ENDS.",
      "PROGRESS TAKES PATIENCE AND PERSISTENCE.",
      "SMALL STEPS EVERY DAY LEAD TO BIG CHANGE.",
      "YOU'RE DOING BETTER THAN YOU THINK.",
      "KEEP GOING YOUR FUTURE SELF WILL THANK YOU.",
      "DISCIPLINE IS A FORM OF SELF-LOVE.",
      "EVERY EFFORT COUNTS, EVEN THE QUIET ONES.",
      "BELIEVE IN THE PROCESS, NOT JUST THE RESULTS.",
      "YOUR ONLY LIMITS ARE THE ONES YOU BELIEVE",
];

function generateRandomQuote() {

      let randomNum = Math.floor(Math.random() * (quotesArr.length - 0 + 1)) + 0;
      motivationalText.textContent = quotesArr[randomNum];
}


//
const finishaudio = new Audio("Complete.mp3");
const cancelAudio = new Audio("cancel.mp3");
//

// For settings 
let settingsOn = false;

// end of settings 

let longbreakrunning = false;


let timeleft;
let timeForAny = 25;
timeleft = timeForAny * 60;
let timerRunning = true;
cancelAudio.volume = 0.5;

let pomodorocount = 0;
let longbreaks = 0;

shortbreakrunning = false;
longbreakrunning = false;
pomodororunning = true;

document.getElementById("PO").style.color = "white";
document.getElementById("SB").style.color = "#c0c0c0";
document.getElementById("LB").style.color = "#c0c0c0";
//
const P = document.getElementById("pomodoroAmount");
P.innerHTML = `Pomodoros Completed &#8594 ${pomodorocount} wins`
function shortbreak() {
      if (timeID) {
            cancelAudio.play();
            return;
      }
      timeForAny = 5;
      timeleft = timeForAny * 60;
      let minutes = Math.floor(timeleft / 60);
      let seconds = (timeleft % 60);
      let timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      time.textContent = timeString;
      document.getElementById("SB").style.color = "#e8e8e8";
      document.getElementById("PO").style.color = "#c0c0c0";
      document.getElementById("LB").style.color = "#c0c0c0";
      pomodororunning = false;
      longbreakrunning = false;
      generateRandomQuote();
}

function longbreak() {
      if (timeID) {
            cancelAudio.play();
            return;
      }
      timeForAny = 10;
      timeleft = timeForAny * 60;
      time.textContent = timeleft;
      let minutes = Math.floor(timeleft / 60);
      let seconds = (timeleft % 60);
      let timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      time.textContent = timeString;
      document.getElementById("LB").style.color = "#e8e8e8";
      document.getElementById("SB").style.color = "#c0c0c0";
      document.getElementById("PO").style.color = "#c0c0c0";
      pomodororunning = false;
      longbreakrunning = true;

      generateRandomQuote();
}

function pomodoro() {
      if (timeID) {
            cancelAudio.play();
            return;
      }
      timeForAny = 25;
      timeleft = timeForAny * 60;
      time.textContent = timeleft;
      let minutes = Math.floor(timeleft / 60);
      let seconds = (timeleft % 60);
      let timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      time.textContent = timeString;
      document.getElementById("PO").style.color = "#e8e8e8";
      document.getElementById("SB").style.color = "#c0c0c0";
      document.getElementById("LB").style.color = "#c0c0c0";
      pomodororunning = true;
      longbreakAmount.innerHTML = `Long Breaks taken &#8594 ${longbreaks} super breaks`;
}

// BEGINNING OF START TIMER
let timeID;
start.onclick = () => {


      if (!timeID) {
            generateRandomQuote();
            timeID = setInterval(timerStart, 1000);
            finishaudio.volume = 0.5;
            finishaudio.play();
      }
}


console.log(`THIS IS TIME LEFT ${timeleft}`)
function timerStart() {
      if (!timerRunning) {

      }
      timerRunning = true;
      console.log(timeleft);
      timeleft -= 1;
      let minutes = Math.floor(timeleft / 60);
      let seconds = (timeleft % 60);

      let timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      console.log("hello");
      time.textContent = timeString;

      if (timeleft <= 0) {
            generateRandomQuote();


            clearInterval(timeID)
            // timeleft = timeForAny * 60;
            timeleft = timeForAny * 60;
            finishaudio.currentTime = 0;
            finishaudio.play();
            timeID = null // to allow a new interval

            if (longbreakrunning) {
                  console.log("longbreakrunning is", longbreakrunning);
                  console.log("longbreakAmount is", longbreakAmount);
                  longbreaks += 1;
                  longbreakAmount.innerHTML = `Long Breaks taken &#8594 ${longbreaks} super breaks`;
                  longbreakrunning = false;
            }

            if (pomodororunning) {
                  pomodorocount += 1;
                  P.innerHTML = `Pomodoros Completed &#8594 ${pomodorocount} wins`
            }

      }
}

// END OF TIMER


analytics.onclick = function () {






}


ResetProgress.onclick = () => {
      pomodorocount = 0;
      longbreaks = 0;
      P.innerHTML = `Pomodoros Completed &#8594 ${pomodorocount} wins`
      longbreakAmount.innerHTML = `Long Breaks taken &#8594 ${longbreaks} super breaks`;
      console.log("Hello");
      generateRandomQuote();
}
let backgroundColorsSet = ["linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)", "linear-gradient(to top, #feada6 0%, #f5efef 100%)"];
let backgroundColorsSetCounter = 0;
changebackground.onclick = () => {


      body.style.backgroundImage = backgroundColorsSet[backgroundColorsSetCounter];
      if (backgroundColorsSetCounter == backgroundColorsSet.length) {
            backgroundColorsSetCounter = 0;
            return;
      }
      ++backgroundColorsSetCounter;
      console.log("Hello");

}

setting.onclick = () => {
      if (settingsOn == true) {
            return;
      }
      settingsOn = true;
      console.log("Hello");
      modal.style.display = "flex";
}

function newSet() {

      console.log(`This is ${newTime.value}`);
      timeForAny = newTime.value;
      timeleft = timeForAny * 60;
      settingsOn = false;
      modal.style.display = "none";
      generateRandomQuote();
      time.textContent = timeleft;
      let minutes = Math.floor(timeleft / 60);
      let seconds = (timeleft % 60);
      let timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      time.textContent = timeString;

}

/*
function newThis() {

      console.log(`This is ${newTime.value}`);
      timeForAny = newTime.value;
      timeleft = timeForAny * 60;
      settingsOn = false;
      modal.style.display = "none";
      generateRandomQuote();
      time.textContent = timeleft;
      let minutes = Math.floor(timeleft / 60);
      let seconds = (timeleft % 60);
      let timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      time.textContent = timeString;

}
function newSet(){

console.log(`This is ${newTime.value}`);
timeForAny = newTime.value;
timeleft = timeForAny * 60;
settingsOn = false;
modal.style.display ="none";
generateRandomQuote();
time.textContent = timeleft;
let minutes = Math.floor(timeleft / 60);
let seconds = (timeleft % 60);
let timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
time.textContent = timeString;

}
*/


