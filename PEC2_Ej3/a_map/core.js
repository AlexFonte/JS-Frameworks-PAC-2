function multiplyBy10(array) {
  // your code here
  return array.map(n => n * 10);
}

function shiftRight(array) {
  // your code here
  // serveis per dir que no sutir fora del index, i mantigui els index dinter del array, com si un fos una llista circular
  return array.map((element, index, arr) => 
    arr[(index - 1 + arr.length) % arr.length]
  );

}

function onlyVowels(array) {
  // your code here
  /**
  * /[^aeiou]/gi regular expression que serveix per per conincidir amb qualsevol caracter que no sigui una  vocal i el remplace per ''.
  * el 'i' en la expresio serveix per dirli que no sigui case sensitve
   * 
   */
  return array.map(word => word.replace(/[^aeiou]/gi,''));
}

function doubleMatrix(array) {
  // your code here
  return array.map(matrix => matrix.map(m => m * 2));
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
