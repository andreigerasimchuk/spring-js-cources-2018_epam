const ItemListService = require('../core/sevices/ItemListService');
const TodoNotFoundError = require('../errors/TodoNotFoundError');
const DAO = require('../dao');


const listService = new ItemListService(DAO);

const create = (req, res, next) => {
  const { title, description } = req.body;

  listService
    .createItem({ title, description })
    .then(item => {
      res.status(200).json({ item });
    })
    .catch(err => {
      next(new Error(err));
    });
}

module.exports = create;