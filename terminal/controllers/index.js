const Todo = require('../models');

exports.create = (answers) => {
    const todo = {};
    todo.title = answers.title;
    todo.description = answers.description;

    return new Promise((resolve, reject) => {
        Todo.create(todo, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

exports.list = () => {
    return new Promise((resolve, reject) => {
        Todo.find((err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}