const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(sumArray) {
  let total = 0;
  for(let i = 0; i < sumArray.length;i++){
    total += sumArray[i];
  }
  return total;
	
};

const multiply = function(multiArray) {
  let total = 1;
  for(let i = 0; i < multiArray.length;i++){
    total = total * multiArray[i];
  }
  return total;

};

const power = function(num, power) {
  return num ** power;
	
};

const factorial = function(factor) {
  if (factor === 0  || factor === 1){
    return 1;
  }
  else {
    let total = 1;
    for(let i = 1; i <= factor; i++){
      total *= i;
    }
    return total;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
