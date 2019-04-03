const weather = require('../data/weather-2018');

window.DATA = {};

window.DATA.weightHeightGender = [
  {
    name: "Alice",
    weight: -2,
    height: -1,
    gender: 1,
  },
  {
    name: "Bob",
    weight: 25,
    height: 6,
    gender: -1,
  },
  {
    name: "Charlie",
    weight: 17,
    height: 4,
    gender: -1,
  },
  {
    name: "Diana",
    weight: -15,
    height: -6,
    gender: 1,
  },
];

// Attach it to our global object so we can play/browse it in the browser
window.DATA.weather = weather;
