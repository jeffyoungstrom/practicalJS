// req 1.1: store todos
var todos = ['item 1', 'item 2', 'item 3']
// req 1.2: display todos
displayTodos();
// req 1.3: add todos
addTodo('item 4');
// req 1.4: change a todo
todos[1] = 'item 2 v2'
displayTodos();
// req 1.5: delete a todo
todos.splice(1, 1)
displayTodos();

// req 2.1: function for display
function displayTodos() {
    console.log('My Todos:', todos);
}

// req 2.2: function for adding
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}
