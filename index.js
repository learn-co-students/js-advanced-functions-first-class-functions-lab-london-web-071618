const returnFirstTwoDrivers = array => array.slice(0,2);

const returnLastTwoDrivers = array => array.slice(array.length-2);

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function (fare) {
    return fare * int;
  }
}

const fareDoubler = fare => fare * 2;

const fareTripler = fare => fare * 3;

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers)
}
