
console.log("I'm connected!")


console.log("Print all numbers from -10 to 19")

for (var i = -10; i < 20; i++){
    console.log(i);

}

console.log("Print all even numbers between 10 and 40")

for(var i = 10;i<=40;i+=2) {
    console.log(i);
}

console.log("Print all odd numbers between 300 and 333")

for (var i = 300;i<=333;i+=2){
    console.log(i + 1);
}

console.log("Print all numbers devisable by 5 and 3 between 5 and 50")

for (var i = 5; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}