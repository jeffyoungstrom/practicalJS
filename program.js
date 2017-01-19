// req 3.1: store todos in an object
var todoList = {
    todos: [],
    // req 4.1 add Todo should add objects
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    // req 4.2 changeTodo should change the todoText property
    changeTodo: function(index, value) {
        this.todos[index].todoText = value;
    },
    // req 3.5 method to delete
    deleteTodo: function(index) {
        this.todos.splice(index, 1);
    },
    // req 4.3 method to toggle completed
    toggleCompleted: function(index) {
        var todo = this.todos[index];   // todo is a reference.  interesting.
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        for (var i=0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        // req 6.1 if all true, make all false
        if (completedTodos === totalTodos) {
            // make everything false
            for (var i=0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            // req 6.2 make everything true
            for (var i=0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    }

};

// req 8.0 refactor event handlers
var handlers = {
    // req 8.1 addTodo controls
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    // req 8.2 changeTodo controls
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber,
            changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    // req 8.3 deleteTodo controls
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
        view.displayTodos();
    },
    // req 8.4 toggleTodo controls
    toggleCompleted: function() {
        var toggleCompletedPositionInput =
        document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    },

};

// req 9.1 add a li for each todo item
var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (var i=0; i < todoList.todos.length; i++ ) {
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i];
            var todoTextWithCompletion='';

            // req 9.2, 9.3 li should have completed and todoText
            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            // req 10.3 each todo needs an id
            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            // req 10.2 each todo gets a delete button
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }
    },
    // req 10.1 create delete buttons
    createDeleteButton: function() {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';

        return deleteButton;
    }
};
