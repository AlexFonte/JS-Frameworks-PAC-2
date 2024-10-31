const { animals, employees, hours, prices } = require('./data');

function entryCalculator(entrants) {
  // your code here
  if (!entrants || Object.entries(entrants).length === 0) return 0;

  return Object.entries(entrants).reduce((total, person) => { 
    /* console.log(person); */
    return total + (prices[person[0]] * person[1])
  }, 0);

}

function schedule(dayName) {
  // your code here
}

function animalCount(species) {
  // your code here
}

function animalMap(options) {
  // your code here
}

function animalPopularity(rating) {
  // your code here
}

function animalsByIds(ids) {
  // your code here
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
