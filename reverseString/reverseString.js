const reverseString = function(string) {
    let array = string.split('');
    let reverseString = '';
    for (i = 0; i < string.length; i++) {
        reverseString += array.pop();
    } 
    return reverseString;
}

module.exports = reverseString
