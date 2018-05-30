const ItemListService = require('../core/sevices/ItemListService');
const TodoNotFoundError = require('../errors/TodoNotFoundError');
const DAO = require('../dao');

const listService = new ItemListService(DAO);

const update = (req, res, next) => {
  const { title, description } = req.body;
  const { _id } = req.params;

  listService
    .updateItem(_id, { title, description })
    .then(item => {
      if (item === null) {
        next(new TodoNotFoundError(_id));
      } else {
        res.status(200).json({ item });
      }
    })
    .catch(err => {
      next(new Error(err));
    });
}

module.exports = update;