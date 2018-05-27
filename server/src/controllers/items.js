const ItemListService = require('../core/sevices/ItemListService');
const DAO = require('../dao');

const listService = new ItemListService(DAO);

const getlist = (req, res) => {
  listService
    .getList()
    .then(items => {
      res.status(200).json({ list: items });
    })
    .catch(err => {
      throw new Error(err);
    });
} 

const getById = (req, res) => {
  const { _id } = req.params;
  listService
    .getItem(_id)
    .then((item) => { 
      res.status(200).json({ item }); 
    })
    .catch(err => {
      throw new Error(err);
    })
}

const create = (req, res) => {

  const { title, discription } = req.body;

  listService
    .createItem({ title, discription })
    .then(item => {
      res.status(200).json({ item });
    })
    .catch(err => {
      throw new Error(err);
    });
}

const remove = (req, res) => {
  const { _id } = req.params;

  listService
    .removeItem(_id)
    .then((result) => {
      if(result.item === null) {
        res.status(200).json({  });
      } else {
        res.status(200).json({ item:result.item });
      }
    })
    .catch(err => {
      res.status(500).json({ err });
    });

}

const update = (req, res) => {
  const { title, discription } = req.body;
  const { _id } = req.params;

  listService
    .updateItem(_id, { title, discription })
    .then(result => {
      if (result.item === null) {
        res.status(401).json({ }); //todo
      } else {
        res.status(200).json({ _id });
      }
    });
}

module.exports = {
  getlist,
  getById,
  create,
  remove,
  update 
}