const leapYears = function(leapYear) {
    if (leapYear >= 400) {
        if (leapYear % 4 == 0 && leapYear % 100 != 0) {
            return true;
        }
        else {
            if (leapYear % 400 == 0) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    else {
        if (leapYear % 4 == 0 && leapYear % 100 != 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
// easy solution
var leapYears = function(year) {
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 == 0)
  }

module.exports = leapYears
