
console.log("I'm connected!")

age = Number(prompt("your age please!"));


if(age < 0){
  console.log("Sorry, this is a negative number.");
}
else if(age < 18){
  console.log("Sorry, you can not enter");
}
else if(age === 21){
  console.log("HAPPY 21ST!");
}
else if(age < 21){
  console.log("You can not enter, but no drinking!");
}
else {
  if(age % 2 === 1){
    console.log("your age is odd");
  }
  else if(age % Math.sqrt(age) === 0){
    console.log("your age is a perfect square");
  }
    console.log("Welcome! Cheers!");
}
