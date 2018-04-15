
console.log("I'm connected!")



function isEven(num) {
    if (num % 2 === 0){
        return true;
    }
    return false;
}


function isEvenRefactor(num) {
    return num % 2 === 0 //boolean result
}

function factorial(num){
    var result = 1;

    //calculate factorial
    for(var i = 2; i <= num; i++){
        result *= i;
    }
    //return the result
    return result;
}

// factorial(6) 6 x 5 x 4 x 3 x 2 x 1


function kebabToSnake(str) {
    //replace all '-' with "_"'s
    var newStr = str.replace(/-/g , "_"); //regexp to replace
    //return str
    return newStr;

}

console.log("isEven(4) returns " + isEven(4));
console.log("isEvenRefactor(4) returns " + isEvenRefactor(4));
console.log("factorial(4) returns " + factorial(4));
console.log("kebabToSnake(test-a-snake) returns " + kebabToSnake("test-a-snake"));



