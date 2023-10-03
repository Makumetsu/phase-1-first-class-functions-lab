const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function returnLastTwoDrivers(drivers) {
return drivers.slice(2,4)
}
let stuff = returnFirstTwoDrivers
const selectingDrivers = [ returnFirstTwoDrivers , returnLastTwoDrivers]
const createFareMultiplier = function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  }
  const fareDoubler = function fareDoubler (fare) {
    return fare * 2
  }
  const fareTripler = function fareTripler(fares){
    return fares * 3
  }
  
  const selectDifferentDrivers = function selectDifferentDrivers(arrayOfDrivers, functionA) {
    return functionA(arrayOfDrivers)
  }

  
console.log(selectDifferentDrivers(drivers,returnLastTwoDrivers ))