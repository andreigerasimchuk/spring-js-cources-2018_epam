const uuid = require('uuid/v1');

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

exports.findCurrentTodo = (id, items) => {
    const todos = [...items];
    const index = todos.findIndex(todos => todos.id === id);
    const todo = todos[index];

    if (index === -1) {
        throw new Error(`TODO item not found. id: ${id}`);
    }

    return { index, todo, todos };
}

exports.createTodo = (item, change, comment = []) => {
    const todo = {
        isLiked: false,
        comments: [],
        id: uuid(),
        ...item,
        ...change
    };

    todo.comments = [...todo.comments, ...comment];

    return todo;
}

exports.print = (message, id) => {
    console.info();
    console.info(`${message} id: ${id} `);
}

exports.printError = (err) => {
    console.info();
    console.error(`error: ${err.message}`);
}

exports.printTodos = (todos = []) => {
    console.info();
    todos.forEach((todo, index) => {
        console.info(`------- todo # ${index + 1} -------`);
        for (key in todo) {
            console.info(`${key}: ${todo[key]}`);
        }
        console.info();
    });
}