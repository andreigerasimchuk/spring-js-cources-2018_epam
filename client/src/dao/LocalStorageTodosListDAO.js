export default class LocalStorageTodosListDAO {
  listeners = null;
  list = null;

  getListeners() {
    if (!this.listeners) {
      this.listeners = [];
    }

    return this.listeners;
  }

  getAll() {
    return this.list;
  }

  /**
   * @return {TodoObject[]}
   */
  getAllTodos() {
    return fetch('http://localhost:3009/api/item/all')
      .then(res => res.json())
      .then((items) => {
        this.list = [...items.list];
        return items.list;
      })
      .catch(err => null);
  }

  create(item) {
    return fetch('http://localhost:3009/api/item/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then(res => res.json())
      .then(data => data.item)
      .catch(err => null);
  }

  updateItem(_id, metod, apiPath) {
    return fetch(`http://localhost:3009/api/item/${apiPath}${_id}`, {
      method: metod,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => res.item)
      .catch(err => null);
  }

  /**
   * @param {TodoObject[]} todos
   */
  saveAllTodos(todos) {
    try {
      this.list = [...todos];
      this.notifyListeners(todos);
    } catch (e) {
      return Promise.reject(e);
    }

    return Promise.resolve();
  }

  notifyListeners(todos) {
    this
      .getListeners()
      .forEach((listener) => {
        listener(todos);
      });
  }

  subscribe(listener) {
    const listeners = this.getListeners();

    listeners.push(listener);

    return () => {
      listeners.filter(l => listener !== l);
    };
  }
}
