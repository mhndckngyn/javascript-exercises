const removeFromArray = function(array, ...itemsToRemove) {
    const newArray = array.filter( item => !itemsToRemove.includes(item))
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
