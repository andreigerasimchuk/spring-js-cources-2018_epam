
class TodoService {
  createTodo(data) {
    const now = new Date().toLocaleString();
    return {
      comments: [],
      createdDate: now,
      isLiked: false,
      isCompleted: false,
      lastUpdateDate: now,
      ...data,
    };
  }

  updateTodo(change, todo) {
    return {
      ...todo,
      ...change,
      lastUpdateDate: new Date().toLocaleString(),
      createdDate: todo.createdDate,
    };
  }
}

module.exports = TodoService;