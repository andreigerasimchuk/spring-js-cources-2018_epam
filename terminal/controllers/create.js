const uuid = require('uuid/v1');
const { writeFile, getAllTodos } = require('../services');

exports.create = (answers) => {
    getAllTodos()
        .then(obj => {
            let todo = {
                ...answers,
                id: uuid()
            }
            obj.todos.push(todo);
            writeFile(JSON.stringify(obj))
        })
        .catch(err => {
            console.log(`error: ${err}`);
        });
}