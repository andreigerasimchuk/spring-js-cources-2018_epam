const express = require('express');
const router = express.Router();

const { 
  getList, getItem, create, remove, update, like, complete, comments,
} = require('../controllers');

const { validateCreateItem, validateGetItem } = require('../validators');

router.get('/all', getList);
router.post('/', validateCreateItem, create);

router.get('/:_id', validateGetItem, getItem);
router.patch('/:_id', validateCreateItem, update);
router.delete('/:_id', validateGetItem, remove);

router.patch('/like/:_id', validateGetItem, like);
router.patch('/complete/:_id', validateGetItem, complete);
router.patch('/addComments/:_id', validateGetItem, validateCreateItem, comments.addComment);
router.patch('/deleteComments/:_id', validateGetItem, comments.deleteComment);

module.exports = router;