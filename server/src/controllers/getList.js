const ItemListService = require('../core/sevices/ItemListService');
const TodoNotFoundError = require('../errors/TodoNotFoundError');
const DAO = require('../dao');

const listService = new ItemListService(DAO);

const getList = (req, res, next) => {
  listService
    .getList()
    .then(items => {
      res.status(200).json({ list: items });
    })
    .catch(err => {
      next(new Error(err));
    });
} 

module.exports = getList;