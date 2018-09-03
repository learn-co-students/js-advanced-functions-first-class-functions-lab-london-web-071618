// Code your solution in this file!
const returnFirstTwoDrivers =  function(drivers){
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(drivers.length -2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier =  function(multiply){
  return function(value) {
    return multiply * value
  }
}

const fareDoubler = function(value){
  return value * 2
}

const fareTripler = function(value){
  return value * 3
}

const selectDifferentDrivers = function(drivers, cb){
    return cb(drivers)
}
