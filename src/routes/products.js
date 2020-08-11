const express = require('express');
const router = express.Router();
const verify = require('../middleware/verifyToken')

<<<<<<< HEAD
const ProductController = require('../controllers/productController');

router
    .get('/', verify, ProductController.getProducts)
    .get('/:id', verify,ProductController.getProduct)
    .post('/', verify, ProductController.saveProducts)
    .delete('/del/:id', verify, ProductController.deleteProduct)
    .patch('/:id', verify, ProductController.updateProducts)
=======
const PostController = require('../controllers/postController');

router
    .get('/', verify, PostController.getPosts)
    .get('/:id', verify, PostController.getPost)
    .post('/', verify, PostController.savePost)
    .delete('/del/:id', verify, PostController.deletePost)
    .patch('/:id', verify, PostController.updatePost)
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c

module.exports = router;