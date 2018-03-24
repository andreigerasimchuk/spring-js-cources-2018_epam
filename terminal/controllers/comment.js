const { getAllTodos, writeFile } = require('../services');

exports.comment = (id, comment) => {
    getAllTodos()
        .then(todos => {
            const result = [...todos];

            const index = result.findIndex(todo => {
                return todo.id === id;
            });

            const currentTodo = result[index];
            const updatedTodo = { ...currentTodo };
            
            updatedTodo.comments.push(comment);

            result.splice(index, 1, updatedTodo);
            return result;
        })
        .then(todos => {
            writeFile(JSON.stringify({ todos }));
        })
        .catch(err => {
            console.log(`error: ${err}`);
        });
}