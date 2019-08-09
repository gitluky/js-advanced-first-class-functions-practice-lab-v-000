// Code your solution in this file!
const logDriverNames = function (drivers) {
  return drivers.forEach( function (el, i, drivers) {
    console.log(el.name);
  });
};

const logDriversByHometown = function (drivers, hometown) {
  return drivers.filter( function (driver) {
    return driver.hometown === hometown;
  });
};
