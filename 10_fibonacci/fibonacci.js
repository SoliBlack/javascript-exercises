function fibonacci(num) {
    let fib = [0, 1]; // Initialize the array with the first two elements (0 and 1)
    if(num < 0){
        return "OOPS";
    }
    else {
        for (let i = 2; i < num+1; i++) {
        fib.push(fib[i - 1] + fib[i - 2]); // Add the last two elements to get the next number
        }
    
        return fib[fib.length - 1];
    }
  }



// Do not edit below this line
module.exports = fibonacci;
