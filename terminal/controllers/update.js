const { getAllTodos, writeFile, findCurrentTodo, createTodo } = require('../services');

exports.update = (id, change, comment = []) => {
    getAllTodos()
        .then(todos => {
            const currentTodo = findCurrentTodo(id, todos);
            const updatedTodo = createTodo(currentTodo.todo, change, comment)

            currentTodo.todos.splice(currentTodo.index, 1, updatedTodo);
            return currentTodo.todos;
        })
        .then(todos => {
            writeFile(JSON.stringify({ todos }));
        })
        .catch(err => {
            console.log(`error: ${err}`);
        });
}