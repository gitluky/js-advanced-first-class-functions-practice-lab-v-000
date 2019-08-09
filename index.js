// Code your solution in this file!
const logDriversName = function (drivers) {
  return drivers.reduce( function (agg, el, i, drivers) {
    console.log(el.name);
  });
};