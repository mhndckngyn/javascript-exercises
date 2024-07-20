const getAge = function(person) {
  if ("yearOfDeath" in person)
    return person.yearOfDeath - person.yearOfBirth;
  
  let currentYear = new Date().getFullYear();
  return currentYear - person.yearOfBirth;
}

const findTheOldest = function(personList) {
  return personList.reduce((oldest, current) => {
    const oldestAge = getAge(oldest);
    const currentAge = getAge(current);

    return oldestAge > currentAge ? oldest : current;
  })
};

// Do not edit below this line
module.exports = findTheOldest;
