const express = require('express');
const router = express.Router();

const { 
  getlist, getById, create, remove, update, 
} = require('../controllers/items');

router.get('/all', getlist);
router.post('/', create);

router.get('/:_id', getById);
router.patch('/:_id', update);
router.delete('/:_id', remove);

module.exports = router;