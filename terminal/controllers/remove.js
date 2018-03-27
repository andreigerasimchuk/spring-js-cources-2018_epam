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
        .then(obj => {
            writeFile(JSON.stringify({ todos: obj.todos }));
            print('The todo was successfully removed.', id);
            printTodos([obj.todo]);
        })
        .catch(err => {
            printError(err);
        });
}

exports.removeTodo = (id, todos) => {
    const currentTodo = findCurrentTodo(id, todos); 
    currentTodo.todos.splice(currentTodo.index, 1);

    const obj = {
        todo: currentTodo.todo,
        todos: currentTodo.todos
    };

    return obj;
}