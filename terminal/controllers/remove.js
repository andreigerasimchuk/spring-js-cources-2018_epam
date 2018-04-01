const { 
    getAllTodos, 
    writeFile, 
    findCurrentTodo, 
    print, 
    printError,
    printTodos } = require('../services');

exports.remove = (id) => {
    getAllTodos()
        .then(todos => {
            return this.removeTodo(id, todos);
        })
        .then(storage => {
            writeFile(JSON.stringify({ todos: storage.todos }));
            print('The todo was successfully removed.', id);
            printTodos([storage.todo]);
        })
        .catch(err => {
            printError(err);
        });
}

exports.removeTodo = (id, todos) => {
    const currentTodo = findCurrentTodo(id, todos); 
    currentTodo.todos.splice(currentTodo.index, 1);

    const storage = {
        todo: currentTodo.todo,
        todos: currentTodo.todos
    };

    return storage;
}