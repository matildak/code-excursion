
console.log("I'm connected!")


var answer = prompt('Are we there yet?');

while(answer.indexOf("yes") == -1){
    var answer = prompt('Are we there yet?');
}
alert('yea, we made it!')