const { Item } = require('../models');

const list = () => {
  return Item.find();
} 

const createItem = (data) => {
  return Item.create(data);
}

const removeItem = (_id) => {
  return Item.findOneAndRemove({ _id });
}

const updateItem = (_id, change) => {
  return Item.findByIdAndUpdate({ _id }, change, { 'new': true });
}

const getItem = (_id) => {
  return Item.findById({ _id });
}

module.exports = {
  list,
  createItem,
  removeItem,
  updateItem,
  getItem,
}