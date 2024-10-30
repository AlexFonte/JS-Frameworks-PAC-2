function onlyEven(array) {
  // your code here
  return array.filter(number => number % 2 === 0);
}

function onlyOneWord(array) {
  // your code here
  return array.filter(word => !/\s/.test(word));
}

function positiveRowsOnly(array) {
  // your code here
  return array.filter(row => row.filter(n => n < 0).length === 0);
}

function allSameVowels(array) {
  // your code here
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
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
