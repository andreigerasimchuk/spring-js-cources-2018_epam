const ItemListService = require('../core/sevices/ItemListService');
const TodoNotFoundError = require('../errors/TodoNotFoundError');
const DAO = require('../dao');

const listService = new ItemListService(DAO);

const remove = (req, res) => {
  const { _id } = req.params;
  console.log(_id)
  listService
    .removeItem(_id)
    .then((result) => {
      if(result.id === null) {
        next(new TodoNotFoundError(_id));
      } else {
        res.status(200).json({ id: result.id });
      }
    })
    .catch(err => {
      next(new Error(err));
    });

}

module.exports = remove;