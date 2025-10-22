'use strict';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCandence = document.querySelector('.form__input--candence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation.getCurrentPosition !== undefined) {
  console.log('is not undefined');
  navigator.geolocation.getCurrentPosition(GeoSucces, GeoFail);
}
function GeoSucces(positon) {
  const { latitude } = positon.coords;
  const { longitude } = positon.coords;

  console.log(latitude, longitude);
  console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
}

function GeoFail() {
  alert('Could not get yout positon');
}
