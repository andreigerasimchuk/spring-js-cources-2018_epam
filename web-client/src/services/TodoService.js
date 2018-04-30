import { guid } from '../utils';

export default class TodoService {
  createTodo(data) {
    const now = new Date();
    return {
      comment: null,
      createdDate: now,
      id: guid(),
      isLiked: false,
      lastUpdateDate: now,
      ...data,
    };
  }

  updateTodo(change, todo) {
    return {
      ...todo,
      ...change,
      lastUpdateDate: new Date(),
      createdDate: todo.createdDate,
    };
  }
}
