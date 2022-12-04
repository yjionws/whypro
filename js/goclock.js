const clockTitle = document.getElementById("js-clock");
 
function getTime() {
 const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
 const now = new Date();
 // This is in milisecondsx
 const difference = new Date(xmasDay - now);
 console.log(difference);
 const secondsInMs = Math.floor(difference / 1000);
 const minutesInMs = Math.floor(secondsInMs / 60);
 const hoursInMs = Math.floor(minutesInMs / 60);
 const days = Math.floor(hoursInMs / 24);
 const seconds = secondsInMs % 60;
 const minutes = minutesInMs % 60;
 const hours = hoursInMs % 24;
 const daysStr = `${days < 10 ? `0${days}` : days}`;
 const hoursStr = `${hours < 10 ? `0${hours}` : hours}`;
 const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes} `;
 const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}`;
 clockTitle.innerText = `${daysStr}일 ${hoursStr}시간 ${minutesStr}분 ${secondsStr}초`;
}
 
getTime();
setInterval(getTime, 1000);
