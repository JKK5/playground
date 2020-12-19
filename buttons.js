const body = document.querySelector("body");
const amPmBtn = document.querySelector(".js-amPmBtn");
const darkModeBtn = document.querySelector(".js-darkModeBtn");
const dateBtn = document.querySelector(".js-dateBtn");
const time = document.querySelector(".js-time");
const date = document.querySelector(".js-date");

function amPmHandler(){
  time.classList.toggle("js-amPm");
}

function darkModeHandler(){
  body.classList.toggle("dark-mode");
}

function hideDate(){
  date.classList.toggle("hide");
}

function listenEventMaker(btn, fn){
  btn.addEventListener("click", fn);
}

function init(){
  listenEventMaker(darkModeBtn, darkModeHandler);
  listenEventMaker(dateBtn, hideDate);
  listenEventMaker(amPmBtn, amPmHandler);
}

init();