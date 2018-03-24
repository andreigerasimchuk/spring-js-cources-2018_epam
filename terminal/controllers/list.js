const { getAllTodos } = require('../services');

exports.list = (answers) => {
    getAllTodos()
        .then(obj => {
            console.info(obj);
        })
        .catch(err => {
            console.log(`error: ${err}`);
        });
}