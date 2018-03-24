const fs = require('fs');

const STORAGE_PATH = './store.json';

exports.openFile = () => {
    return new Promise((resolve, reject) => {
        fs.open(STORAGE_PATH, 'a+', (err, fd) => {
            if (err) {
                reject(err);
            } else {
                resolve(fd);
            }
        });
    });
}

exports.readFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(STORAGE_PATH, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

exports.parseValidJson = (str) => {
    try {
        return JSON.parse(str);
    } catch (err) {
        const obj = {};
        return obj;
    }
}

exports.getJsonObj = (data) => {
    if (data['todos'] === undefined) {
        data.todos = [];
    } else if (!Array.isArray(data['todos'])) {
        data.todos = [];
    }
    return data;
}

exports.writeFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(STORAGE_PATH, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}