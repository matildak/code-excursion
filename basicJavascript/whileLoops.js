
console.log("I'm connected!")


console.log("Print all numbers from -10 to 19")
var number1 = -10

while (number1 < 20){
    console.log(number1);
    number1++;
}

console.log("Print all even numbers between 10 and 40")
var number1 = 10

while (number1 <= 40){
    console.log(number1);
    number1+=2;
}

console.log("Print all odd numbers between 300 and 333")
var number1 = 300

while (number1 <= 333){
    console.log(number1 + 1);
    number1+=2;
}

console.log("Print all numbers devisable by 5 and 3 between 5 and 50")
var number1 = 5

while (number1 <= 50){
    if(number1 % 5 === 0 && number1 % 3 === 0){
        console.log(number1);
    }
    number1++;
}