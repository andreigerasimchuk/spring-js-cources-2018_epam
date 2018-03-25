const { openFile, readFile } = require('./io');
const { parseValidJson, getJsonObj, printError } = require('./services');

exports.getAllTodos = () => {
    return openFile()
        .then(() => {
            return readFile();
        })
        .then(string => {
            const validJson = parseValidJson(string);
            const obj = getJsonObj(validJson);
            return obj.todos;
        })
        .catch(err => {
            printError(err);
        });
}