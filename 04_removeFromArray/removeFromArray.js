/*const removeFromArray = function() {

};*/

function removeFromArray(array, num){
		
    let newArray = array.splice(num - 1, 1);
    let myArray = array;
    return array;

}

// Do not edit below this line
module.exports = removeFromArray;
