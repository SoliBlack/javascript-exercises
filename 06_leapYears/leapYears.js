/*const leapYears = function() {

};*/

function leapYears(year){
    let isLeapYear = false;

    if((year % 4 === 0 && year % 100 !== 0) || year % 400 ===0){
        isLeapYear = true;
        return isLeapYear;
        }
    else{
        isLeapYear = false;
        return isLeapYear;
    }
}


// Do not edit below this line
module.exports = leapYears;
