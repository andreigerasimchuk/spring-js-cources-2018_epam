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

const removeItem = async (_id) => {
  return new Promise( async (resolve, reject) => {
    try {
      const item = await Item.findOneAndRemove({ _id });
      resolve({ item, message: 'ok'});
    } catch (err) {
      reject({ item:null, message:err });
    }
  });
}

const updateItem = async (_id, change) => {
  return new Promise( async (resolve, reject) => {
    try {
      const item = await Item.update({_id}, change);
      resolve(item);
    } catch (err) {
      reject(err)
    }
  });
}

const getItem = async(_id) => {
  return new Promise( async (resolve, reject) => {
    try {
      const item = await Item.findById({ _id });
      resolve({ item, message: 'ok'});
    } catch (err) {
      reject({ item:null, message:err });
    }
  });
}

module.exports = {
  list,
  createItem,
  removeItem,
  updateItem,
  getItem,
}