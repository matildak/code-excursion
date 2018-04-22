
inputArray = [1,1,1,1];

printReverse(inputArray);
console.log(isUniform(inputArray));
sumArray(inputArray);
Max(inputArray);
sumArrayForeach(inputArray);

function printReverse(array){

    for (i=array.length-1; i >=0; i--){
        console.log(array[i]);
    }

}

function isUniform(array){

    var firstNumber = array[0];
    for (i=array.length-1; i >=0; i--){
        console.log(array[i]);
        if (array[i]!==firstNumber) {
            return false; //If one number is not equal to the first one, return false
        }
    }
    return true; //If all numbers in array is the same, return true

}

function sumArray(array) {
    var sum = array[0];
    for (var i=1; i < array.length; i++){ //OBS dont count 0 again...
        sum = sum + array[i];
    }
    console.log("The sum of the array is " + sum);
    return sum;
}

function sumArrayForeach(array){
    var total = 0;
    array.forEach(function (element) { total += element; });
    console.log("foreach " + total);
    return total;
}

function Max(array) {
    var highestNumber = array[0];
    for (var i=0; i < array.length; i++){
        console.log(array[i]);
        if (array[i]>highestNumber) {
            highestNumber = array[i];
        }
    }
    console.log("The highest number is: " + highestNumber);
    return highestNumber;

}