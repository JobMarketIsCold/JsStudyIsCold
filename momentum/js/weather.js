const API_KEY = "972d76f3e9b8965edb73c639799a357d";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	console.log(`너는 ${lat},${lon}에 살고 있지?`);
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector("#weather span:first-child");
			const city = document.querySelector("#weather span:last-child");
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
			city.innerText = data.name;
		});
}

function onGeoError() {
	alert("위치를 찾지 못하였습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
