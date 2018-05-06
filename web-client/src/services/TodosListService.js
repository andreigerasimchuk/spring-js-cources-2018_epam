import { guid, findIndex } from '../utils';

export default class TodosListService {
  constructor(todosListDAO, todoService) {
    this.todosListDAO = todosListDAO;
    this.todoService = todoService;
  }

  /**
   * @param {Object} data
   * @param {string} data.title
   * @param {string} data.description
   * @return {Promise<string>}
   */
  createTodoItem(data) {
    let todoId;

    return this.todosListDAO.getAllTodos()
      .then((todos) => {
        const todo = this.todoService.createTodo(data);
        todoId = todo.id;
        const result = [...todos, todo];
        return this.todosListDAO.saveAllTodos(result);
      })
      .then(() => todoId);
  }

  /**
   * @param {string} todoId
   * @param {TodoChange} change
   */
  removeTodoItem(todoId) {
    return this.todosListDAO.getAllTodos()
      .then((todos) => {
        const index = findIndex(todoId, todos);
        const result = [...todos];

        result.splice(index, 1);

        return this.todosListDAO.saveAllTodos(result);
      })
      .then(() => todoId);
  }

  commentingItem(todoId, commentTitle) {
    return this.todosListDAO.getAllTodos()
      .then((todos) => {
        const index = findIndex(todoId, todos);

        const result = [...todos];
        const target = result[index];
        const comment = {
          id: guid(),
          title: commentTitle,
          date: new Date().toLocaleString(),
        };

        target.comments = [...target.comments, comment];

        return this.todosListDAO.saveAllTodos(result);
      })
      .then(() => todoId);
  }

  likingItem(todoId) {
    return this.todosListDAO.getAllTodos()
      .then((todos) => {
        const index = findIndex(todoId, todos);

        const result = [...todos];
        const target = result[index];
        const updatedTodo = this.todoService.updateTodo({ isLiked: !target.isLiked }, target);

        result.splice(index, 1, updatedTodo);

        return this.todosListDAO.saveAllTodos(result);
      })
      .then(() => todoId);
  }

  removeComment(todoId, commentId) {
    return this.todosListDAO.getAllTodos()
      .then((todos) => {
        const index = findIndex(todoId, todos);

        const result = [...todos];
        const target = result[index];

        const indexComment = findIndex(commentId, target.comments);
        target.comments.splice(indexComment, 1);

        return this.todosListDAO.saveAllTodos(result);
      })
      .then(() => todoId);
  }

  updatingItem(todoId, data) {
    return this.todosListDAO.getAllTodos()
      .then((todos) => {
        const index = findIndex(todoId, todos);
        const result = [...todos];
        const target = result[index];

        const updatedTodo = this.todoService.updateTodo(data, target);

        result.splice(index, 1, updatedTodo);

        return this.todosListDAO.saveAllTodos(result);
      })
      .then(() => todoId);
  }
}
