// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers) {
  return arrayOfDrivers.slice(0, 2)
}


const returnLastTwoDrivers = function(arrayOfDrivers) {
  return arrayOfDrivers.slice(-2)
}



const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

function createFareMultiplier(num) {
  return function(fare) {
    return fare * num;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, passedFunction) {
  return passedFunction(arrayOfDrivers)
}
