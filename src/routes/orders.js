const express = require('express');
const router = express.Router();
const verify = require('../middleware/verifyToken')

const OrderController = require('../controllers/orderController');

router
    .get('/', verify, OrderController.getOrders)
    .get('/:id', verify,OrderController.getOrder)
    .post('/', verify, OrderController.saveOrders)
    .delete('/del/:id', verify, OrderController.deleteOders)
    .patch('/:id', verify, OrderController.updateOrder)

module.exports = router;