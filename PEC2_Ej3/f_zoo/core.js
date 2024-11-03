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
    // console.log(sentence);
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
}

function animalPopularity(rating) {
  // your code here
  const animalsPopularity = animals.reduce((acc, animal) => {
    if (acc[animal.popularity]) {
      acc[animal.popularity].push(animal.name);
    } else {
      acc[animal.popularity] = [animal.name]
    }
    return acc;
  }, {});

  return rating ? animalsPopularity[rating] : animalsPopularity;

}

function animalsByIds(ids) {
  // your code here
  if (!ids) return [];

  const idList = Array.isArray(ids) ? ids : [ids];

  return idList.reduce((acc, id) => {
    //busquem el empleat amb el id
    const animal = animals.find(animal => animal.id === id);
    if (animal) acc.push(animal);
    return acc;
  }, []);
}

function animalByName(animalName) {
  // your code here
  let animalFind = {}
  if (!animalName) animalFind;

  animals.forEach(species => {
    species.residents.some(resident => {
      const find = resident.name === animalName
      if (find) animalFind = { ...resident, 'species': species.name };
      return find;
    });
  })
  return animalFind;
}

function employeesByIds(ids) {
  // your code here
  if (!ids) return [];

  const idList = Array.isArray(ids) ? ids : [ids];

  return idList.reduce((acc, id) => {
    //busquem el empleat amb el id
    const employee = employees.find(employe => employe.id === id);
    if (employee) acc.push(employee);
    return acc;
  }, []);
}

function employeeByName(employeeName) {
  // your code here
  let employeeFind = {}
  if (!employeeName) return employeeFind;

  employeeFind = employees.filter((employee) => {
    return employee.firstName === employeeName || employee.lastName === employeeName
  })[0];

  return employeeFind;
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
