const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);

router.get('/register', userController.getRegister);
router.post('/register', userController.postRegister);

module.exports = router;