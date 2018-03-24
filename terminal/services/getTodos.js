const {
    openFile,
    readFile,
    parseValidJson,
    getJsonObj } = require('./index');

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
        .catch(err => {
            console.log(`error: ${err}`);
        });
}