const Todo = require('../models');

exports.create = (todo) => {
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

exports.remove = (_id) => {
    return new Promise((resolve, reject) => {
        Todo.remove({ _id }, (err, res) => {
            if (err) {
                reject(err);
            } else if (res.n === 0) {
                reject(`Todo with id ${_id} not found.`);
            } else {
                resolve();
            }
        });
    });
}

exports.update = (_id, todo) => {
    return new Promise((resolve, reject) => {
        Todo.update({ _id }, todo, (err, res) => {
            if (err) {
                reject(err);
            } else if (res.n === 0) {
                reject(`Todo with id ${_id} not found.`);
            } else {
                resolve();
            }
        });
    });
}

exports.getById = (_id) => {
    return new Promise((resolve, reject) => {
        Todo.findOne({ _id }, (err, todo) => {
            if (err) {
                reject(err);
            } else if (todo === null) {
                reject(`Todo with id ${_id} not found.`);
            } else {
                resolve(todo);
            }
        });
    });
}