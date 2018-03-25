const { openFile, readFile } = require('./io');
const { parseValidJson, getJsonObj, printError } = require('./services');

exports.getAllTodos = () => {
    return openFile()
        .then(data => {
            return readFile();
        })
        .then(data => {
            const validJson = parseValidJson(data);
            const obj = getJsonObj(validJson);
            return obj.todos;
        })
        .catch(err => {
            printError(err);
        });
}