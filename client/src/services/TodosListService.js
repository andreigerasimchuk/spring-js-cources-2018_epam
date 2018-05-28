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
   */
  createTodoItem(data) {
    this.todosListDAO.create(data)
      .then((item) => {
        if (item !== null) {
          const items = this.todosListDAO.getAll();
          this.todosListDAO.saveAllTodos([...items, item]);
        }
      });
  }

  /**
   * @param {string} todoId
   */
  removeTodoItem(todoId) {
    this.todosListDAO.updateItem(todoId, 'DELETE', '')
      .then((id) => {
        if (id !== null) {
          const items = this.todosListDAO.getAll();
          const index = findIndex(id, items);
          const result = [...items];
          result.splice(index, 1);
          this.todosListDAO.saveAllTodos(result);
        }
      });
  }

  /**
   * @param {string} todoId
   * @param {Object} change
   */
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

  /**
   * @param {string} todoId
   * @param {Boolean} isLiked
   */
  likingItem(todoId, isLiked) {
    this.updatingItem(todoId, { isLiked: !isLiked });
  }

  /**
   * @param {string} todoId
   * @param {Boolean} isCompleted
   */
  completingItem(todoId, isCompleted) {
    this.updatingItem(todoId, { isCompleted: !isCompleted });
  }

  /**
   * @param {string} todoId
   * @param {string} commentTitle
   */
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

  /**
   * @param {string} todoId
   * @param {string} commentId
   */
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
}
