const { 
    getAllTodos, 
    findCurrentTodo,
    print, 
    printError, 
    printTodos } = require('../services');

exports.read = (id) => {
    getAllTodos()
        .then(todos => {
            const todo = this.readTodo(id, todos);
            print('The todo was successfully read.', id);
            printTodos([todo]);
        })
        .catch(err => {
            printError(err);
        });
}

exports.readTodo = (id, todos) => {
    const currentTodo = findCurrentTodo(id, todos);
    return currentTodo.todo;
}