const ItemListService = require('../core/sevices/ItemListService');
const TodoNotFoundError = require('../errors/TodoNotFoundError');
const DAO = require('../dao');

const listService = new ItemListService(DAO);

const addComment = (req, res, next) => {
  const { _id } = req.params;
  const { title } = req.body;
  
  listService
    .addComment(_id, title)
    .then(result => {
      if (result.item === null) {
        next(new TodoNotFoundError(_id));
      } else {
        res.status(200).json({ item: result.item });
      }
    })
    .catch(err => {
      next(new Error(err));
    });
}

const deleteComment = (req, res, next) => {
  const { _id } = req.params;
  const { id } = req.body;
  listService
    .deleteComment(_id, id)
    .then(result => {
      if (result.item === null) {
        next(new TodoNotFoundError(_id));
      } else {
        res.status(200).json({ item: result.item });
      }
    })
    .catch(err => {
      next(new Error(err));
    });
}

module.exports = {
  addComment,
  deleteComment,
}