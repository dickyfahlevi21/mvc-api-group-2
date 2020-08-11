const express = require('express');
const router = express.Router();
const verify = require('../middleware/verifyToken')

const UserController = require('../controllers/userController');

router
    .get('/', verify, UserController.getUsers)
    .get('/:id', verify, UserController.getUser)
    .post('/', verify, UserController.saveUsers)
    .delete('/del/:id', verify, UserController.deleteUsers)
    .patch('/:id', verify, UserController.updateUsers)

module.exports = router;