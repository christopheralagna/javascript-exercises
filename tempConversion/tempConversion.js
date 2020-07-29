const ftoc = function(farenheit) {
  farenheit = (farenheit-32)*(5/9);
  return Math.round(farenheit * 10) / 10;
}

const ctof = function(celsius) {
  celsius = celsius*(9/5)+32;
  return Math.round(celsius * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
