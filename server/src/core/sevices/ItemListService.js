const ItemService = require('./ItemService');
const guid = require('../util');

const itemService = new ItemService();

class ItemListService {

  constructor(DAO) {
    this.itemsDAO = DAO;
  }

  getItem(_id) {
    return this.itemsDAO.getItem(_id);
  }

  getList() {
    return this.itemsDAO.list();
  }

  createItem(data) {
    const item = itemService.create(data);
    return this.itemsDAO.createItem(item);
  }

  removeItem(_id) {
    return this.itemsDAO.removeItem(_id);
  }

  update(_id, item, change) {
    console.log(change)
    const cleanItem = itemService.getCleanItem(item);
    const updatedItem = itemService.update(change, cleanItem);
    console.log(updatedItem)
    return this.itemsDAO
      .updateItem(_id, updatedItem)
      .then(item => {
        return { item, message: 'ok' };
      })
      .catch(err => {
        return { item: null, message: err };
      });
  }

  updateItem(_id, change) {
    return this.itemsDAO
      .getItem(_id)
      .then(item => {
        return this.update(_id, item, change);
      })
      .catch(err => {
        return { item: null, message: err };
      });
  }

  likeItem(_id) {
    console.log(_id);
    return this.itemsDAO
      .getItem(_id)
      .then(data => {
        const item = data.item;
        console.log(data.item);
        return this.update(_id, item, { isLiked: !item.isLiked});
      })
      .catch(err => {
        return { item: null, message: err };
      });
  }

  completeItem(_id) {
    return this.itemsDAO
      .getItem(_id)
      .then(item => {
        return this.update(_id, item, { isCompleted: !item.isCompleted});
      })
      .catch(err => {
        return { item: null, message: err };
      });
  }

  addComment(_id, title) {
    return this.itemsDAO
    .getItem(_id)
    .then(item => {
      const comment = {
        title,
        id: guid(),
      };
      let comments = [...item.comments, comment]
      return this.update(_id, item, { comments });
    })
    .catch(err => {
      return { item: null, message: err };
    });
  }

}

module.exports = ItemListService;