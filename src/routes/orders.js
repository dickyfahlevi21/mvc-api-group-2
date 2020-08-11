const express = require('express');
const router = express.Router();
const verify = require('../middleware/verifyToken')

<<<<<<< HEAD
const OrderController = require('../controllers/orderController');

router
    .get('/', verify, OrderController.getOrders)
    .get('/:id', verify,OrderController.getOrder)
    .post('/', verify, OrderController.saveOrders)
    .delete('/del/:id', verify, OrderController.deleteOders)
    .patch('/:id', verify, OrderController.updateOrder)
=======
const CommentController = require('../controllers/commentController');

router
    .get('/', verify, CommentController.getComments)
    .get('/:id', verify, CommentController.getComment)
    .post('/', verify, CommentController.saveComment)
    .delete('/del/:id', verify, CommentController.deleteComment)
    .patch('/:id', verify, CommentController.updateComment)
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c

module.exports = router;