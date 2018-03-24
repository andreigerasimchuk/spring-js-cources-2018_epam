const {
    getAllTodos,
    writeFile,
    findCurrentTodo,
    createTodo,
    print,
    printEror } = require('../services');

exports.update = (id, change, comment = []) => {
    getAllTodos()
        .then(todos => {
            return updateTodo(id, todos, change, comment);
        })
        .then(todos => {
            writeFile(JSON.stringify({ todos }));
            print('The todo was successfully updated.', id);
        })
        .catch(err => {
            printEror(err);
        });
}

exports.updateTodo = (id, todos, change, comment) => {
    const currentTodo = findCurrentTodo(id, todos);
    const updatedTodo = createTodo(currentTodo.todo, change, comment)

    currentTodo.todos.splice(currentTodo.index, 1, updatedTodo);
    return currentTodo.todos;
}