const removeFromArray = function(...args) {
    //separates the first array and following arguments into particular variables
    let argumentArray = Array.from(arguments);
    let array = argumentArray.shift();
    for (j = 0; j < argumentArray.length; j++) {
        for (i = 0; i < array.length; i++) {
            if (array[i] === argumentArray[j]) {
                array.splice(i, 1);
            }
            else{
                continue;
            }
        }
    }
    return array;
}

/*const removeFromArray = function (...args) {
    alert(typeof(args[0]))
    alert(typeof(args[1]))
    alert(typeof(args[2]))
    const array = args[0];
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;*/
}

module.exports = removeFromArray
