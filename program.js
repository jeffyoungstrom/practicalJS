// req 1: store todos
var todos = ['item 1', 'item 2', 'item 3']
// req 2: display todos
displayTodos();
// req 3: add todos
todos.push('item 4')
displayTodos();
// req 4: change a todo
todos[1] = 'item 2 v2'
displayTodos();
// req 5: delete a todo
todos.splice(1, 1)
displayTodos();

function displayTodos() {
    console.log('My Todos:', todos);
}

