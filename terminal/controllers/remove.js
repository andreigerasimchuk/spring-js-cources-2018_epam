const { 
    getAllTodos, 
    writeFile, 
    findCurrentTodo, 
    print, 
    printError } = require('../services');

exports.remove = (id) => {
    getAllTodos()
        .then(todos => {
            return this.removeTodo(id, todos);
        })
        .then(todos => {
            writeFile(JSON.stringify({ todos }));
            print('The todo was successfully removed.', id);
        })
        .catch(err => {
            printError(err);
        });
}

exports.removeTodo = (id, todos) => {
    const currentTodo = findCurrentTodo(id, todos);
    currentTodo.todos.splice(currentTodo.index, 1);

    return currentTodo.todos;
}