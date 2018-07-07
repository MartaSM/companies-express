const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/create', userController.create);
router.post('/create', userController.doCreate);


module.exports = router;
