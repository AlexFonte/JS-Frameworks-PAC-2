function sum(array) {
  return array.reduce((acc, value) => acc + value, 0);
}

function productAll(array) {
  // your code here
  return array.reduce((acc, value) => 
    acc * value.reduce((acc1, value1) => acc1 * value1, 1)
  , 1);
}

function objectify(array) {
  // your code here
  return array.reduce(
    (object, value) => {
      object[value[0]] = value[1];
      return object;
    },{});
}

function luckyNumbers(array) {
  // your code here
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
