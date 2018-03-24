const { getAllTodos, writeFile, findCurrentTodo, print, printEror } = require('../services');

exports.remove = (id) => {
    getAllTodos()
        .then(todos => {
            const currentTodo = findCurrentTodo(id, todos);
            currentTodo.todos.splice(currentTodo.index, 1);

            return currentTodo.todos;
        })
        .then(todos => {
            writeFile(JSON.stringify({ todos }));
            print('The todo was successfully removed.', id);
        })
        .catch(err => {
            printEror(err);
        });
}