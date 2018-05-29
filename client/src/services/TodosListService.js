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
      .then((item) => {
        if (item !== null) {
          const items = this.todosListDAO.getAll();
          const index = findIndex(item.id, items);
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
  updatingItem(todoId, data, metod = 'PATCH', apiPath = '') {
    this.todosListDAO.updateItem(todoId, metod, apiPath, data)
      .then((item) => {
        if (item !== null) {
          const items = this.todosListDAO.getAll();
          const index = findIndex(item.id, items);
          const result = [...items];
          result.splice(index, 1, item);
          this.todosListDAO.saveAllTodos(result);
        }
      });
  }

  /**
   * @param {string} todoId
   * @param {Boolean} isLiked
   */
  likingItem(todoId, isLiked) {
    this.updatingItem(todoId, {}, 'PATCH', 'like/');
  }

  /**
   * @param {string} todoId
   * @param {Boolean} isCompleted
   */
  completingItem(todoId, isCompleted) {
    this.updatingItem(todoId, {}, 'PATCH', 'complete/');
  }

  /**
   * @param {string} todoId
   * @param {string} commentTitle
   */
  commentingItem(todoId, commentTitle) {
    this.updatingItem(todoId, { title: commentTitle }, 'PATCH', 'addComments/');
  }

  /**
   * @param {string} todoId
   * @param {string} commentId
   */
  removeComment(todoId, commentId) {
    this.updatingItem(todoId, { id: commentId }, 'PATCH', 'deleteComments/');
  }
}
