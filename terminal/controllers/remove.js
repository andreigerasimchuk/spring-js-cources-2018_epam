const { getAllTodos, writeFile } = require('../services');

exports.remove = (id) => {
    getAllTodos()
        .then(todos => {
            const result = [...todos];

            const index = result.findIndex(todo => {
                return todo.id === id;
            });

            result.splice(index, 1);
            return result;
        })
        .then(todos => {
            writeFile(JSON.stringify({ todos }));
        })
        .catch(err => {
            console.log(`error: ${err}`);
        });
}