const { writeFile, getAllTodos, createTodo } = require('../services');

exports.create = (answers) => {
    getAllTodos()
        .then(todos => {
            const todo = createTodo({}, answers);
            return [...todos, todo];
        })
        .then(todos => {
            writeFile(JSON.stringify({ todos }))
        })
        .catch(err => {
            console.log(`error: ${err}`);
        });
}