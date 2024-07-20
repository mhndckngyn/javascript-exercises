const getTheTitles = function (bookList) {
  // return bookList.reduce((nameList, current) => {
  //   nameList.push(current.title);
  //   return nameList;
  // }, []);

  const nameList = [];
  for (book of bookList) {
    nameList.push(book.title);
  }
  return nameList;
};

// Do not edit below this line
module.exports = getTheTitles;
