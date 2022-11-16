const add = (a, b) => a + b;
	
const subtract = (a , b) => a - b;

const sum = function([...a]) { // the parameter for the function includes the rest parameter to accept an indefinite number of arguments for the array
	const array = [...a];
  let initVal = 0;
  const sumAll = array.reduce((previousValue, currentValue) => previousValue + currentValue, // here I use the reduce() method to sum all the elements of an array using an accumulator and a current value as parameters besides the callback function. 
  initVal
  );
  return sumAll;
  
};

const multiply = function([...a]) {
  const array = [...a];
  // initVal = 0; IT DOESN'T NEED AN INITIAL VALUE JUST THE ACCUMULATOR AND THE CURRENT VALUE
  const multiplyAll = array.reduce((accumulator, currentValue) => accumulator * currentValue
  );
  return multiplyAll;
};

const power = (a ,b) => a ** b;

const factorial = function(a) {
 if (a === 0) {
  return 1;
 }

 if (a === 1) {
  return 1;
 }

 else { var arr = [];
  for (let i = 1; i < a; i++) {
    let result = a-i;
    arr.push(result);
    // console.log(arr);
    
  }
  const multiplyAll = multiply(arr);
  return multiplyAll * a;
};
}
// const factorial = function(a) {
//   for (let i = 1; i < a; i++) {
//     let result = a-i;
//     let arr= [];
//     console.log(arr);
//   }
  


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
