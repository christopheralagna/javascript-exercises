const sumAll = function(int1, int2) {
    let sum = 0;
    if (typeof int1 !== "number" || typeof int2 !== "number") {return "ERROR"}
    if (int1 < 0 || int2 < 0) {return "ERROR"}
    if( int1 < int2) {
        let addend = int1;
        while(addend <= int2) {
            sum += addend;
            addend += 1;
        }
    } 
    else {
        let addend = int2;
        while(addend <= int1) {
            sum += addend;
            addend += 1;
        }
    }
    return sum;
}

module.exports = sumAll
