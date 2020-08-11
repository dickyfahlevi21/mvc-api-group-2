const express = require('express');
const router = express.Router();
const verify = require('../middleware/verifyToken')

const UserController = require('../controllers/userController');

router
    .get('/', verify, UserController.getUsers)
<<<<<<< HEAD
    .get('/:id', verify, UserController.getUser)
=======
    .get('/:id', verify, UserController.getUsers)
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
    .post('/', verify, UserController.saveUsers)
    .delete('/del/:id', verify, UserController.deleteUsers)
    .patch('/:id', verify, UserController.updateUsers)

module.exports = router;