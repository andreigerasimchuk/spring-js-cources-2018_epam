const { Item } = require('../models');

const list = () => {
  return new Promise(async (resolve, reject) => {
      const list = await Item.find();
      resolve(list);
      return;
  });
} 

const createItem = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const item = await Item.create(data); 
      resolve(item);
    } catch (err) {
      reject(err);
    }});
}

removeItem = async (_id) => {
  return new Promise( async (resolve, reject) => {
    try {
      await Item.remove(_id);
      resolve();
    } catch (err) {
      reject(err)
    }
  });
}

module.exports = {
  list,
  createItem,
  removeItem,
}