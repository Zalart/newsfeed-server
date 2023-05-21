const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

router.get('/user', userController.getUsers);
router.get('/user/:userId', userController.getUser);
router.post('/user', userController.addUser);
router.put('/user/:userId', userController.updateUser);
router.delete('/user/:userId', userController.deleteUser);

module.exports = router;
