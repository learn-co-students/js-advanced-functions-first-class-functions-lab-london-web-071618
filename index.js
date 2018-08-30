// Code your solution in this file!

const returnFirstTwoDrivers = drivers => drivers.slice(0, 2)

const returnLastTwoDrivers = drivers => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = num => multiplier => num * multiplier

const fareDoubler = num => num * 2

const fareTripler = num => num * 3

const selectDifferentDrivers = (arrayOfDrivers, func) => func(arrayOfDrivers)
