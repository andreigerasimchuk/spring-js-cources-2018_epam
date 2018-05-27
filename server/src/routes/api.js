const express = require('express');
const router = express.Router();

const { 
  getList, getItem, create, remove, update, like, complete, addComments,
} = require('../controllers');

const validateCreateItem = require('../validators/createItem');

router.get('/all', getList);
router.post('/', validateCreateItem, create);

router.get('/:_id', getItem);
router.patch('/:_id', update);
router.delete('/:_id', remove);

router.patch('/like/:_id', like);
router.patch('/complete/:_id', complete);
router.patch('/addComments/:_id', addComments);

module.exports = router;