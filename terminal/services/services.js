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

    return { index, todo, todos };
}

exports.createTodo = (item, change, comment = []) => {
    const todo = {
        isLiked: false,
        comments: [],
        id: uuid(),
        ...item,
        ...change
    }

    todo.comments = [...todo.comments, ...comment];

    return todo;
}