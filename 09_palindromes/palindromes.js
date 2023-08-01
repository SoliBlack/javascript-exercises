const palindromes = function (string) {
    if (string.charAt(string.length -1) === "!" || string.charAt(string.length -1) === "."){
        string = string.slice(0, -1);
    }
    inputString = string.toLowerCase().replace(/\s/g,"").replace(/\,/g,"");
    myArray = inputString.split("");
    reverseString = myArray.reverse().join("").toString().replace(/\s/g, "").replace(/\,/g, "");
    if (inputString === reverseString){
        return true;
    }
    else{
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
