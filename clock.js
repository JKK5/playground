const nowAmPm = document.querySelector(".js-amPm");
const nowDate = document.querySelector(".js-date");
const nowTime = document.querySelector(".js-time");

const dayOfWeek = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];  // getDay가 숫자(0 ~ 6)을 반환하기 때문에 배열과 인덱스 번호 활용

function addZero(num){
  return (num < 10 ? `0${num}` : num);  // 삼항 연산자를 사용하여 분과 초가 10보다 작을 때(= 한 자리일 때) 앞에 0을 붙여줌 
}

function setClock(){
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;  // getMonth가 0 ~ 11을 반환하기 때문에 1을 더해줌
  const date = today.getDate();
  const day = today.getDay();

  let hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  if (nowTime.classList.contains("js-amPm")) {
    nowAmPm.classList.remove("hide");
    if (hours >= 12) {
      nowAmPm.innerText = "오후";
      hours -= 12
      hours = addZero(hours);
    } else {
      nowAmPm.innerText = "오전";
    }
  } else {
    nowAmPm.classList.add("hide");
  }

  nowDate.innerText = (`${year}년 ${month}월 ${date}일 ${dayOfWeek[day]}`);
  nowTime.innerText = (`${hours}:${addZero(minutes)}:${addZero(seconds)}`);
}

function init(){
  setClock();
  setInterval(setClock, 1000);  // 1초에 한 번씩 실행
}

init();