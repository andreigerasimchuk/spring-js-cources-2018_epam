const  { createItem, removeItem, list } = require('../dao');
const TodoService = require('../services/TodoService');

const getlist = (req, res) => {
  list()
    .then(items => {
      res.status(200).json({ list: items });
    })
    .catch(err => {
      throw new Error(err);
    });
} 

const getById = (req, res) => {
  // todo
}

const create = (req, res) => {

  const { title, discription } = req.body;

  const todoService = new TodoService();
  const data = todoService.createTodo({ title, discription });

  createItem(data)
    .then(item => {
      res.status(200).json({ item: item });
    })
    .catch(err => {
      throw new Error(err);
    });
}

const remove = (req, res) => {
  const { _id } = req.params;
  removeItem(_id)
    .then(() => {
      res.status(200).json({ });
    })
    .catch(err => {
      throw new Error(err);
    });

}

const update = (req, res) => {
  // todo
}

module.exports = {
  getlist,
  getById,
  create,
  remove,
  update 
}