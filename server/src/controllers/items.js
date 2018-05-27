const ItemListService = require('../core/sevices/ItemListService');
const DAO = require('../dao');
const TodoNotFoundError = require('../errors/TodoNotFoundError');

const listService = new ItemListService(DAO);

const getlist = (req, res) => {
  listService
    .getList()
    .then(items => {
      res.status(200).json({ list: items });
    })
    .catch(err => {
      next(new Error(err));
    });
} 

const getById = (req, res) => {
  const { _id } = req.params;
  listService
    .getItem(_id)
    .then((result) => { 
      if(result.item === null) {
        next(new TodoNotFoundError(_id));
      } else {
        res.status(200).json({ item: result.item });
      }
    })
    .catch(err => {
      next(new Error(err));
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
      next(new Error(err));
    });
}

const remove = (req, res) => {
  const { _id } = req.params;

  listService
    .removeItem(_id)
    .then((result) => {
      if(result.item === null) {
        next(new TodoNotFoundError(_id));
      } else {
        res.status(200).json({ item:result.item });
      }
    })
    .catch(err => {
      next(new Error(err));
    });

}

const update = (req, res) => {
  const { title, discription } = req.body;
  const { _id } = req.params;

  listService
    .updateItem(_id, { title, discription })
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

const like = (req, res) => {
  const { _id } = req.params;
  listService
    .likeItem(_id)
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

const complete = (req, res) => {
  const { _id } = req.params;
  listService
    .completeItem(_id)
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

const addComments = (req, res, next) => {
  const { _id } = req.params;
  const { title } = req.body;
  listService
    .addComment(_id, title)
    .then(result => {
      if (result.item === null) {
        next(new TodoNotFoundError(_id));
      } else {
        console.log('tut')
        res.status(200).json({ _id });
      }
    })
    .catch(err => {
      next(new Error(err));
    });
}

module.exports = {
  getlist,
  getById,
  create,
  remove,
  update,
  like,
  complete,
  addComments
}