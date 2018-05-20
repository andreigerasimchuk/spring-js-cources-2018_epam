const express = require('express');
const router = express.Router();

const { 
  getlist, getById, create, remove, update,
} = require('../controllers/items');

router.get('/items', getlist);

router.post('/item', create);
router.delete('/item/:id', remove);

module.exports = router;