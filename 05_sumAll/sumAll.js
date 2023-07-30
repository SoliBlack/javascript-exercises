/*const sumAll = function() {

};*/

function sumAll(num1, num2){

    if (num1 < 0 || num2 < 0 || num1 !== +num1 || num2 !== +num2){
        return 'ERROR'
    }
    else if (num1 < num2){
        let i = num1;
        let sum = 0;
        
        for (i; i < num2 + 1; i++){
            sum = sum + i;       
        }
        return sum;
    }
    else if (num1 > num2){
        let i = num2;
        let sum = 0;
        
        for (i; i < num1 + 1; i++){
            sum = sum + i;       
        }
        return sum;
    }
    
    else{
        return 'ERROR'
    }
}

// Do not edit below this line
module.exports = sumAll;
