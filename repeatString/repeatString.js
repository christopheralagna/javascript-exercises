const repeatString = function(str, numberOfRepeats) {
    if (numberOfRepeats < 0){
        return "ERROR";
    }
    let concatString = '';
    for (i = 0; i < numberOfRepeats; i++) {
        concatString += str;
    }
    return concatString;
}

module.exports = repeatString