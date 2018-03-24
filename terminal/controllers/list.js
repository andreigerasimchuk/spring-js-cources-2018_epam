const { getAllTodos } = require('../services');

exports.list = (answers) => {
    getAllTodos()
        .then(todos => {
            console.info(todos);
        })
        .catch(err => {
            console.log(`error: ${err}`);
        });
}