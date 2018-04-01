const {
    getAllTodos,
    writeFile,
    findCurrentTodo,
    createTodo,
    print,
    printError,
    printTodos } = require('../services');

exports.update = (id, change, comment = []) => {
    getAllTodos()
        .then(todos => {
            return this.updateTodo(id, todos, change, comment);
        })
        .then(storage => {
            writeFile(JSON.stringify({ todos: storage.todos }));
            print('The todo was successfully updated.', id);
            printTodos([storage.todo]);
        })
        .catch(err => {
            printError(err);
        });
}

exports.updateTodo = (id, todos, change, comment = []) => {
    const currentTodo = findCurrentTodo(id, todos);
    const updatedTodo = createTodo(currentTodo.todo, change, comment);

    currentTodo.todos.splice(currentTodo.index, 1, updatedTodo);

    const storage = {
        todo: updatedTodo,
        todos: currentTodo.todos 
    };

    return storage;
}