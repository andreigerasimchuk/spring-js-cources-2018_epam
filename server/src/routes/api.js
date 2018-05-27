const express = require('express');
const router = express.Router();

const { 
  getlist, getById, create, remove, update, like,
} = require('../controllers/items');

router.get('/all', getlist);
router.post('/', create);

router.get('/:_id', getById);
router.patch('/:_id', update);
router.delete('/:_id', remove);

router.patch('/like/:_id', like);

module.exports = router;