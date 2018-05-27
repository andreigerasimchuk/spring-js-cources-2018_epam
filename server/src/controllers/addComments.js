const ItemListService = require('../core/sevices/ItemListService');
const TodoNotFoundError = require('../errors/TodoNotFoundError');
const DAO = require('../dao');

const listService = new ItemListService(DAO);

const addComments = (req, res, next) => {
  const { _id } = req.params;
  const { title } = req.body;
  listService
    .addComment(_id, title)
    .then(result => {
      if (result.item === null) {
        next(new TodoNotFoundError(_id));
      } else {
        res.status(200).json({ _id });
      }
    })
    .catch(err => {
      next(new Error(err));
    });
}

module.exports = addComments;