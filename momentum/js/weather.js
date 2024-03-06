const API_KEY = "972d76f3e9b8965edb73c639799a357d";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	console.log(`너는 ${lat},${lon}에 살고 있지?`);
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
	console.log(url);
}

function onGeoError() {
	alert("위치를 찾지 못하였습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
