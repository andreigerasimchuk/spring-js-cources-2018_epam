const { openFile, readFile } = require('./io');
const { parseValidJson, getJsonObj } = require('./services');

exports.getAllTodos = () => {
    return openFile()
        .then(data => {
            return readFile();
        })
        .then(data => {
            return parseValidJson(data);
        })
        .then(data => {
            return getJsonObj(data);
        })
        .then(obj => {
            return obj.todos;
        })
        .catch(err => {
            console.log(`error: ${err}`);
        });
}