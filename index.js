
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fareMultiplier) {
    return function(fare) {
        return fare * fareMultiplier;
    };
};
const fareDoubler = function(fare) {
    return fare * 2;
};
const fareTripler = function(fare) {
    return fare * 3;
};
const selectDifferentDrivers = function(drivers, selectDriver) {
    if (selectDriver === returnFirstTwoDrivers) {
   return returnFirstTwoDrivers(drivers);
   } else if (selectDriver === returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
   }
};
