const clock = document.querySelector("#clock");

clock.innerText = "시계입니다.";

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	clock.innerText = `${hours}시${minutes}분${seconds}초`;
}

getClock();
setInterval(getClock, 1000);
