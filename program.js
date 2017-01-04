// req 3.1: store todos in an object
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    // req 3.2 method to display
    displayTodos: function() {
        console.log('My Todos:', this.todos);
    },
    // req 3.3 method to add
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    // req 3.4 method to change
    changeTodo: function(index, value) {
        this.todos[index] = value;
        this.displayTodos();
    },
    // req 3.5 method to delete
    deleteTodo: function(index) {
        this.todos.splice(index, 1);
        this.displayTodos();
    }
};

// display todos
todoList.displayTodos();
// add todos
todoList.addTodo('item 4 by method');
// change a todo
todoList.changeTodo(1, 'item 2 v2 by method');
// delete a todo
todoList.deleteTodo(1);

