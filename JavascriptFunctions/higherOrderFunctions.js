
console.log("I'm connected!")



function sing(){
    console.log("one, two three");
    console.log("four, five, six");
}

var handel1 = setInterval(sing(), 500); //no () because we dont call it, setInterval does

clearInterval(handel1); //The number returned from setInterval but how do I get a hold of it?


//anonymous functions for example to pass a set of code to a function
var handle = setInterval(function () {
    console.log("I am an anonymous function!")
    console.log("Awesome!!")
}, 2000);

// Stop in console with -> clearInterval(handle);
//

//var handle = setInterval(function, 20);

// When you want to cancel it:
//clearInterval(handle);
//handle = 0; // I just do this so I know I've cleared the interval



