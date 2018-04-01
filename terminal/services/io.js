const fs = require('fs');
const path = require('path');

const STORAGE_PATH = path.resolve('./store.json');

exports.openFile = () => {
    return new Promise((resolve, reject) => {
        fs.open(STORAGE_PATH, 'a+', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve();
        });
    });
}

exports.readFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(STORAGE_PATH, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(data);
        });
    });
}

exports.writeFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(STORAGE_PATH, data, (err) => {
            if (err) {
                reject(err);
                return;
            }
            
            resolve();
        });
    });
}