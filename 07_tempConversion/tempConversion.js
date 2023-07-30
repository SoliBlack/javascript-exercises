const convertToCelsius = function(fahr) {
  let cels = (fahr - 32) * 5/9;
  let rounded = +cels.toFixed(1);
  return rounded;
};

const convertToFahrenheit = function(cels) {
  let fahr = (cels * 9/5) + 32;
  let rounded = +fahr.toFixed(1);
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
