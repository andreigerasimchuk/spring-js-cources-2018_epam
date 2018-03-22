
exports.createTodo = (answers) => {
    return new Promise((resolve, reject) => {
        if (answers.title == '' || answers.description == '') {
            reject('Not filled title or description property.');
        } else {
            const todo = {};
            todo.title = answers.title;
            todo.description = answers.description;
            resolve(todo);
        }
    });
}