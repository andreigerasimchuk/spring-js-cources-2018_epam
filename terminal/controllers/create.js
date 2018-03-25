const { 
    writeFile, 
    getAllTodos, 
    createTodo, 
    print, 
    printError, 
    printTodos} = require('../services');

exports.create = (answers) => {
    let todo = {};
    getAllTodos()
        .then(todos => {
            todo = createTodo({}, answers);
            return [...todos, todo];
        })
        .then(todos => {
            writeFile(JSON.stringify({ todos }))
            print('The todo was successfully created.', todo.id);
            printTodos([todo]);
        })
        .catch(err => {
            printError(err);
        });
}