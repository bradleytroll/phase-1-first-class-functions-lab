//Redoing old labs for extra practice. New code below; original code commented out below.

const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2);
};

const returnLastTwoDrivers = function(array) {
    return array.slice(2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int) {
    return function(fare) {
        return (fare * int);
    };
};

const fareDoubler = function(fare) {
    return fare * 2;
};

const fareTripler = function(fare) {
    return fare * 3;
};

const selectDifferentDrivers = function(drivers, select) {
    if (select === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else if (select === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    };
};
   
// const returnFirstTwoDrivers = function(arr) {
//     return arr.slice(0, 2)
// };
// const returnLastTwoDrivers = function(arr) {
//     return arr.slice(2)
// };
// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// const createFareMultiplier = function(int) {
//     return function(fare) {
//         return int * fare
//     }  
// };
// const fareDoubler = createFareMultiplier(2);
// const fareTripler = createFareMultiplier(3);
// const selectDifferentDrivers = function(drivers, select) {
//     if (select === returnFirstTwoDrivers) {
//         return returnFirstTwoDrivers(drivers)
//     }
//     else if (select === returnLastTwoDrivers) {
//         return returnLastTwoDrivers(drivers)
//     }
// }