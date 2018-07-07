const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/:id/create', commentController.doCreate);


module.exports = router;