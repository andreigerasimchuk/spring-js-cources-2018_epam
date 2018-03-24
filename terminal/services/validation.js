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