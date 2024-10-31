// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every(n => n % 2 === 0);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input.every((item, index, array) => typeof (item) === typeof (array[0]));
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input.every(item => Array.isArray(item) && item.every(element => element > 0));
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  return input.every(word => {
    if (typeof word !== 'string') return false;
    const vowels = word.match(/[aeiou]/gi);
    return vowels.every((item, index, array) => item === array[0]);
  });


  const arr = array.filter(word => {
    const vowels = word.match(/[aeiou]/gi);
    // console.log(vowels);
    const unique = new Set(vowels); //creem un nou Set, ja quen no repeteix valors
    // console.log(unique)
    return unique.size === 1; // si el size del Set es 1 llavors vol dir que totes les vocals son iguals. i l'afegim al array.
  });
  // console.log(arr);
  return arr;
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
