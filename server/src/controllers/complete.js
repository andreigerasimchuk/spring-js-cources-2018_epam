const ItemListService = require('../core/sevices/ItemListService');
const TodoNotFoundError = require('../errors/TodoNotFoundError');
const DAO = require('../dao');

const listService = new ItemListService(DAO);

const complete = (req, res, next) => {
  const { _id } = req.params;
  
  listService
    .completeItem(_id)
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

module.exports = complete;