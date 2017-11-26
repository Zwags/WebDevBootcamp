var todos = ["Buy food"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  //Ask again for new input
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}
console.log("Quitting todo")

function listTodos() {
  console.log("********")
  todos.forEach(function(todo, i) {
    console.log(i + ": " + todo)
  })
  console.log("********")
}

function addTodo() {
  //capture new todo
  var newTodo = prompt("Enter new todo!");
  //push to array
  todos.push(newTodo);
  console.log("Added Todo!");
}

function deleteTodo() {
  //ask for index of todo to Delete
  var index = prompt("Enter index of todo to delete.");
  //delete todo
  todos.splice(index, 1);
  console.log("Deleted Todo!");
}
