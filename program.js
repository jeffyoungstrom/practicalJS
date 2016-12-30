// req 1.1: store todos
var todos = ['item 1', 'item 2', 'item 3']
// req 1.2: display todos
displayTodos();
// req 1.3: add todos
addTodo('item 4');
// req 1.4: change a todo
changeTodo(1, 'item 2 v2');
// req 1.5: delete a todo
deleteTodo(1);

// req 2.1: function for display
function displayTodos() {
    console.log('My Todos:', todos);
}

// req 2.2: function for adding
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

// req 2.3: function for changing
function changeTodo(index, value) {
    todos[index] = value;
    displayTodos();
}

// req 2.4: function for deleteing
function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodos();
}
