const { guid } = require('../util');

class ItemService {
  create(data) {
    const now = new Date().toLocaleString();
    return {
      id: guid(),
      comments: [],
      createdDate: now,
      isLiked: false,
      isCompleted: false,
      lastUpdateDate: now,
      ...data,
    };
  }

  update(change, item) {
    return {
      ...item,
      ...change,
      lastUpdateDate: new Date().toLocaleString(),
      createdDate: item.createdDate,
    };
  }

  getCleanItem(item) {
    const { title, description, isLiked, isCompleted, createdDate, comments } = item;
    return { title, description, isLiked, isCompleted, createdDate, comments };
  }
}

module.exports = ItemService;