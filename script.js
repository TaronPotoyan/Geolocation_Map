"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

if (navigator.geolocation.getCurrentPosition !== undefined) {
  console.log("is not undefined");
  navigator.geolocation.getCurrentPosition(GeoSucces, GeoFail);
}
function GeoSucces(positon) {
  const { latitude } = positon.coords;
  const { longitude } = positon.coords;
  const coords = [latitude, longitude];

  const map = L.map("map").setView(coords, 13);

  L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  L.marker(coords)
    .addTo(map)
    .bindPopup("A pretyy CSS popup.<br> Easily customizable")
    .openPopup();

  map.on("");
}

function GeoFail() {
  alert("Could not get yout positon");
}
