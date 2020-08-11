<<<<<<< HEAD
const { users, products, orders } = require("../models");
=======
const { posts, comments, authors } = require("../models");
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c

const response = {
  status: false,
  message: "",
  data: [],
};
<<<<<<< HEAD

const attUser = ['username', 'password', 'email', 'full_name'];
const attProduct = ['name', 'price', 'weight', 'photo'];
const attOrder = ['address', 'postcode', 'status', 'shipment_detail'];

class ProductController {

    static async getProducts(req, res){
        try {
            const findProducts = await products.findAll({
                attributes: attProduct,
                include: [{
                    model: users,
                    attributes: attUser,
                    include: [{
                        model: orders,
                        attributes: attOrder,
                    }]
                }]
            });
            if (findProducts.length !== 0) {
                response.data = findProducts;
=======
const attAuthor = ['username', 'email', 'profile'];
const attPost = ['title', 'content', 'tags', 'status'];
const attComment = ['content', 'status', 'email', 'url'];

class PostController {

    static async getPosts(req, res){
        try {
            const findposts = await posts.findAll({
                attributes: attPost,
                include: [{
                    model: authors,
                    attributes: attAuthor,
                    include: [{
                        model: comments,
                        attributes: attComment,
                    }]
                }]
            });
            if (findposts.length !== 0) {
                response.data = findposts;
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
                response.status = true;
                response.message = "Data ditemukan!"
                res.status(200).json(response);
            } else {
                response.data = '';
                response.status = false;
                response.message = "Data tidal ditemukan!";
                res.status(400).json(response);
            }
        } catch (err) {
            response.data = '';
            response.status = false;
            response.message = err.message;
            res.status(400).json(response);
        }
    }

<<<<<<< HEAD
    static async getProduct(req, res) {
        const { id } = req.params;
        const productDetail = await products.findByPk(
            id, {
                attributes: attProduct,
                include: [{
                    model: users,
                    attributes: attUser,
                    include: [{
                        model: orders,
                        attributes: attOrder
=======
    static async getPost(req, res) {
        const { id } = req.params;
        const postdetail = await posts.findByPk(
            id, {
                attributes: attPost,
                include: [{
                    model: authors,
                    attributes: attAuthor,
                    include: [{
                        model: comments,
                        attributes: attComment
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
                    }] 
                }]
            }
        );
        try {
<<<<<<< HEAD
            if (productDetail) {
                response.status = true;
                response.data = productDetail;
=======
            if (postdetail) {
                response.status = true;
                response.data = postdetail;
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
                response.message = "Data ditemukan!";
                res.status(200).json(response);
            } else {
                response.data = '';
                response.status = false;
                response.message = "Data tidak ditemukan!";
                res.status(400).json(response);
            }
        } catch (error) {
            response.data = '';
            response.status = false;
            response.message = error.message;
            res.status(404).json(response);
        }
    }

<<<<<<< HEAD
    static async saveProducts(req, res) {
        const {
            body: { name, price, weight, photo }
        } = req;

        try {
            const saveProduct = await products.create({
                name, price, weight, photo
=======
    static async savePost(req, res) {
        const {
            body: { title, content, tags, status, authorId }
        } = req;

        try {
            const savePost = await posts.create({
                title, content, tags, status, authorId
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
            });
            response.status = true;
            response.message = "Berhasil tambah data"
            response.data = {
<<<<<<< HEAD
                name: saveProduct.name,
                price: saveProduct.price,
                weight: saveProduct.weight,
                photo: saveProduct.photo
=======
                Title: savePost.title,
                Content: savePost.content,
                Tags: savePost.tags,
                Status: savePost.status
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
            };
            res.status(201).json(response);
        } catch (error) {
            response.data = '';
            response.status = false;
            response.message = "ID author tidak ditemukan!";
            res.status(400).json(response);
        }
    }
    
<<<<<<< HEAD
    static async updateProducts(req, res) {
        const { id } = req.params;
        const { name, price, weight, photo } = req.body;
        const pos = await products.update({ name, price, weight, photo },
=======
    static async updatePost(req, res) {
        const { id } = req.params;
        const { title, content, tags, status, authorId } = req.body;
        const pos = await posts.update({ title, content, tags, status, authorId },
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
        { where: { id: id } });

        try {
            if (pos) {
                response.status = true
                response.message = `Data post berhasil diubah`;
<<<<<<< HEAD
                response.data = await products.findByPk(
                    id, {
                        attributes: attProduct,
                        include: [{
                            model: users,
                            attributes: attUser,
                            include: [{
                                model: orders,
                                attributes: attOrder
=======
                response.data = await posts.findByPk(
                    id, {
                        attributes: attPost,
                        include: [{
                            model: authors,
                            attributes: attAuthor,
                            include: [{
                                model: comments,
                                attributes: attComment
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
                            }] 
                        }]
                });
                res.status(200).json(response);
            } else {
                response.data = '';
                response.status = false;
                response.message = "Data gagal diperbarui!";
                res.status(400).json(response);
            }
        } catch (err) {
            response.data = '';
            response.status = false;
            response.message = err.message;
            res.status(400).json(response);
        }
    }

<<<<<<< HEAD
    static async deleteProduct(req, res) {
        const { id } = req.params;
        const delProduct = await products.destroy({ where: {
=======
    static async deletePost(req, res) {
        const { id } = req.params;
        const delPost = await posts.destroy({ where: {
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
            id: id
        }});

        try {
<<<<<<< HEAD
            if (delProduct) {
=======
            if (delPost) {
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
                response.status = true;
                response.data = `ID : ${id}`
                response.message = `Data post berhasil dihapus`;
                res.status(200).json(response);
            } else {
                response.data = '';
                response.status = false;
                response.message = "Data gagal dihapus!";
                res.status(400).json(response);
            }
        } catch (err) {
            response.data = '';
            response.status = false;
            response.message = err.message;
            res.status(400).json(response);
        }
    }
}

<<<<<<< HEAD
module.exports = ProductController;
=======
module.exports = PostController;
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
