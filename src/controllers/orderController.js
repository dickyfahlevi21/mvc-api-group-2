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

class OrderController {

    static async getOrders(req, res){
        try {
            const findOrder = await orders.findAll({
                attributes: attOrder,
                include: [{
                    model: products,
                    attributes: attProduct,
                    include: [{
                        model: users,
                        attributes: attUser
                    }] 
                }]
            });
            if (findOrder.length !== 0) {
                response.status = true;
                response.data = findOrder;
                response.message = "Data ditemukan!";
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
                response.status = true;
                response.message = "Data ditemukan!"
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
                res.status(200).json(response);
            } else {
                response.data = '';
                response.status = false;
<<<<<<< HEAD
                response.message = "Data tidak ditemukan!";
=======
                response.message = "Data tidal ditemukan!";
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
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
    static async saveOrders(req, res) {
        const {
            body: {address, postcode, productId, userId,status, shipment_detail }
        } = req;

        try {
            const saveOrder = await orders.create({
                address, postcode, productId, userId,status, shipment_detail
            });
            response.status = true;
            response.message = "Berhasil simpan data";
            response.data = {
                address: saveOrder.address,
                postcode: saveOrder.postcode,
                status: saveOrder.status,
                shipment_detail: saveOrder.shipment_detail,
            };
            res.status(201).json(response);
        } catch {
            response.data = '';
            response.status = false;
            response.message = "ID author / ID post tidak ada!";
            res.status(400).json(response);
        }
    }

    static async getOrder(req, res) {
        const { id } = req.params;
        const orderDetail = await orders.findByPk(
            id, {
                attributes: attOrder,
                include: [{
                    model: products,
                    attributes: attProduct,
                    include: [{
                        model: users,
                        attributes: attUser
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
            if (orderDetail) {
                response.status = true;
                response.data = orderDetail;
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
    
    static async updateOrder(req, res) {
        const { id } = req.params;
        const { address, postcode, productId, userId,status, shipment_detail } = req.body;
        const auth = await orders.update({ address, postcode, productId, userId,status, shipment_detail },
        { where: { id: id } });

        try {
            if (auth) {
                response.data = true;
                response.message = `Data berhasil diubah`;
                response.data = await orders.findByPk(
                    id, {
                        attributes: attOrder,
                        include: [{
                            model: products,
                            attributes: attProduct,
                            include: [{
                                model: users,
                                attributes: attUser
                            }] 
                        }]
                    });
=======

    static async savePost(req, res) {
        const {
            body: { title, content, tags, status, authorId }
        } = req;

        try {
            const savePost = await posts.create({
                title, content, tags, status, authorId
            });
            response.status = true;
            response.message = "Berhasil tambah data"
            response.data = {
                Title: savePost.title,
                Content: savePost.content,
                Tags: savePost.tags,
                Status: savePost.status
            };
            res.status(201).json(response);
        } catch (error) {
            response.data = '';
            response.status = false;
            response.message = "ID author tidak ditemukan!";
            res.status(400).json(response);
        }
    }
    
    static async updatePost(req, res) {
        const { id } = req.params;
        const { title, content, tags, status, authorId } = req.body;
        const pos = await posts.update({ title, content, tags, status, authorId },
        { where: { id: id } });

        try {
            if (pos) {
                response.status = true
                response.message = `Data post berhasil diubah`;
                response.data = await posts.findByPk(
                    id, {
                        attributes: attPost,
                        include: [{
                            model: authors,
                            attributes: attAuthor,
                            include: [{
                                model: comments,
                                attributes: attComment
                            }] 
                        }]
                });
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
                res.status(200).json(response);
            } else {
                response.data = '';
                response.status = false;
<<<<<<< HEAD
                response.message = "Data gagal diubah!";
=======
                response.message = "Data gagal diperbarui!";
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
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
    static async deleteOders(req, res) {
        const { id } = req.params;
        const delComment = await orders.destroy({ where: {
=======
    static async deletePost(req, res) {
        const { id } = req.params;
        const delPost = await posts.destroy({ where: {
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
            id: id
        }});

        try {
<<<<<<< HEAD
            if (delComment) {
                response.status = true;
                response.message = `Data berhasil dihapus`;
                response.data = `ID : ${id}`
=======
            if (delPost) {
                response.status = true;
                response.data = `ID : ${id}`
                response.message = `Data post berhasil dihapus`;
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
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
module.exports = OrderController;
=======
module.exports = PostController;
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
