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
  console.log(dayName);
  const hores = !dayName ? hours : { [dayName]: hours[dayName] }
  const result = Object.entries(hores).reduce((sentence, [day, { open, close }]) => {
    sentence[day] = getHumanHoures(open, close);
    console.log(sentence);
    return sentence;
  }, {});
  console.log(result);
  return result;
}

function animalCount(species) {
  // your code here
  const animalCount = animals.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});
  return species ? animalCount[species] : animalCount;
}

function animalMap(options) {
  // your code here
  console.log(options);
  
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

// ############## EXTRA FUNCTIONS #################
function getHumanHoures(open, close) {
  if (open === 0 && close === 0) return 'CLOSED';

  return `Open from ${open}am until ${close - 12}pm`;
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
