var todos = [];

var input = prompt("What would you like to do? new, list or quit?");

window.setTimeout(function () { //this is a workaround for chrome to show html-text before prompt.
    while (input !== "quit") {

        //check input choice
        if (input === "list") {
        listTodos();
        } else if (input === "new") {
        addTodo();
        }else if (input = "delete"){
        deleteTodo();
        }
        //ask again
        input = prompt("What would you like to do? new, list or quit?");
    }
    console.log("OK, you quit the app!");
},500);


function listTodos() {
    console.log("***********");
    todos.forEach(function(todo,i){
        console.log(i + ": " + todo);
    });
    console.log("***********");
}
function addTodo() {
    //ask for a new todo
    var newTodo = prompt("Enter a new Todo");
    //add to the array
    todos.push(newTodo);
    console.log("new item added");
}

function deleteTodo() {
    //aks for what number to delete
    var deleteTodo = prompt("Enter number of the ToDo you want to delete");
    //delete that todo
    todos.splice(deleteTodo,1); //first param where to start deleteing and second how many to dlete
    console.log("Todo " + deleteTodo + " is deleted");
}

/*
Note about Todo List Code Along Part 2
Section 11, Lecture 133
Hello Everyone,

Colt will be using the Array.forEach function in the next video. This note to provides further information about .forEach and how it works.

.forEach takes a callback function, that callback function is expected to have at least 1, but up to 3, arguments. This is how .forEach was designed.

The arguments are in a specific order:
- The first one represents each element in the array (per loop iteration) that .forEach was called on.
- The second represents the index of said element.
- The third represents the array that .forEach was called on (it will be the same for every iteration of the loop).

You have a couple options when calling .forEach on an array:

You can pass in an anonymous function:

[1,2,3].forEach(function(el, i, arr) {
  console.log(el, i, arr);
});
Or you can pass in a pre-written, named function.

function logNums(el, i, arr) {
  console.log(el, i, arr);
}

[1,2,3].forEach(logNums);
Notice how in the second example we don't invoke logNums when passing it into .forEach? We simply pass in the function name. We don't need to invoke the logNums function, .forEach does that for us. In fact, it invokes the function multiple times, once for every element inside of the array.

I hope that helped clear some things up, please post a question in the Q&A if you're unsure of anything that I've shared above.

cheers,
Ian



 */