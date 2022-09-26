// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const firstTwoDrivers = drivers.slice(0, 2);
const lastTwoDrivers = drivers.slice(-2);
const returnFirstTwoDrivers = function() {
    return firstTwoDrivers;
}
const returnLastTwoDrivers = function() {
    return lastTwoDrivers
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(fare) {
    return function() {return fare * 5}
}
function fareDoubler(fare) {
    return fare * 2;
}
function fareTripler(fare) {
    return fare * 3;
}
function selectDifferentDrivers(drivers, twoDrivers) {
    if (twoDrivers === returnFirstTwoDrivers) {
    return drivers, returnFirstTwoDrivers();
    }
    else if (twoDrivers === returnLastTwoDrivers) {
    return drivers, returnLastTwoDrivers(); 
}
}