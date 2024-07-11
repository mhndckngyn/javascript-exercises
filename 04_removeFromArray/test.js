const removeFromArray = function (array, ...itemsToRemove) {
  console.log(array);
  console.log("Items to remove: " + itemsToRemove);

  const newArray = array.filter((item) => {
    return !itemsToRemove.includes(item);
  });

  return newArray;
};

const newArray = removeFromArray([1, 2, 3, 4], 3);
console.log(newArray); // Outputs: [1, 2, 4]
