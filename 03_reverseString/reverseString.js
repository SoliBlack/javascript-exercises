/*const reverseString = function() {

    

};*/

function reverseString(string){
    let myArray = [];
    myArray = string.split("");
    let revArray = myArray.reverse().join("").toString();
    return revArray;
    
}

// Do not edit below this line
module.exports = reverseString;
