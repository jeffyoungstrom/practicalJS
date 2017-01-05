// req 3.1: store todos in an object
var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            // req 5.1 show message for no todos
            console.log('You don\'t have any Todos. Take a nap!');
        } else {
            // req 5.1 show todoText property
            // req 5.3 show completed property
            console.log('My Todos:', this.todos);
            for (var i=0; i < this.todos.length ; i++) {
                var todo = this.todos[i];
                if (todo.completed) {
                    console.log('(x)', todo.todoText);
                } else {
                    console.log('( )', todo.todoText);
                }
            }
        }
    },
    // req 4.1 add Todo should add objects
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    // req 4.2 changeTodo should change the todoText property
    changeTodo: function(index, value) {
        this.todos[index].todoText = value;
        this.displayTodos();
    },
    // req 3.5 method to delete
    deleteTodo: function(index) {
        this.todos.splice(index, 1);
        this.displayTodos();
    },
    // req 4.3 method to toggle completed
    toggleCompleted: function(index) {
        var todo = this.todos[index];   // todo is a reference.  interesting.
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};

// display todos
todoList.displayTodos();
// add todos
todoList.addTodo('item 1');
todoList.addTodo('item 2');
todoList.addTodo('item 3');
// change a todo
todoList.changeTodo(1, 'item 2 v2');
// delete a todo
todoList.deleteTodo(2);
// toggle a todo
todoList.toggleCompleted(0);

