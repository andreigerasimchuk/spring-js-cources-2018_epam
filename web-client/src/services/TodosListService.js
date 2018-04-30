export default class TodosListService {
  constructor(todosListDAO, todoService) {
    this.todosListDAO = todosListDAO;
    this.todoService = todoService;
  }

  findTodoIndex(id, todos) {
    return todos.findIndex(todo => todo.id === id);
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
        const index = this.findTodoIndex(todoId, todos);
        const target = todos[index];
        const result = [...todos];

        result.splice(index, 1);

        return this.todosListDAO.saveAllTodos(result);
      })
      .then(() => todoId);
  }
}
