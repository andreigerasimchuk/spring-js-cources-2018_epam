const uuid = require('uuid/v1');
const { writeFile, getAllTodos } = require('../services');

exports.create = (answers) => {
    getAllTodos()
        .then(todos => {
            let todo = {
                ...answers,
                isLike: false,
                id: uuid()
            }
            return [...todos, todo];
        })
        .then(todos => {
            writeFile(JSON.stringify({ todos }))
        })
        .catch(err => {
            console.log(`error: ${err}`);
        });
}