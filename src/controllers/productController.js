const { users, products, orders } = require("../models");

const response = {
  status: false,
  message: "",
  data: [],
};

const attUser = ['username', 'password', 'email', 'full_name'];
const attProduct = ['name', 'price', 'weight', 'photo'];
const attOrder = ['address', 'postcode', 'status', 'shipment_detail'];

class ProductController {

    static async getProducts(req, res){
        try {
            const findProducts = await products.findAll({
                attributes: attProduct,
                include: [{
                    model: orders,
                    attributes: attOrder,
                    include: [{
                        model: users,
                        attributes: attUser,
                    }]
                }]
            });
            if (findProducts.length !== 0) {
                response.data = findProducts;
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

    static async getProduct(req, res) {
        const { id } = req.params;
        const productDetail = await products.findByPk(
            id, {
                attributes: attProduct,
                include: [{
                    model: orders,
                    attributes: attOrder,
                    include: [{
                        model: users,
                        attributes: attUser,
                    }]
                }]
            }
        );
        try {
            if (productDetail) {
                response.status = true;
                response.data = productDetail;
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

    static async saveProducts(req, res) {
        const {
            body: { name, price, weight, photo }
        } = req;

        try {
            const saveProduct = await products.create({
                name, price, weight, photo
            });
            response.status = true;
            response.message = "Berhasil tambah data"
            response.data = {
                name: saveProduct.name,
                price: saveProduct.price,
                weight: saveProduct.weight,
                photo: saveProduct.photo
            };
            res.status(201).json(response);
        } catch (error) {
            response.data = '';
            response.status = false;
            response.message = "ID author tidak ditemukan!";
            res.status(400).json(response);
        }
    }
    
    static async updateProducts(req, res) {
        const { id } = req.params;
        const { name, price, weight, photo } = req.body;
        const pos = await products.update({ name, price, weight, photo },
        { where: { id: id } });

        try {
            if (pos) {
                response.status = true
                response.message = `Data post berhasil diubah`;
                response.data = await products.findByPk(
                    id, {
                        attributes: attProduct,
                        include: [{
                            model: orders,
                            attributes: attOrder,
                            include: [{
                                model: users,
                                attributes: attUser,
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

    static async deleteProduct(req, res) {
        const { id } = req.params;
        const delProduct = await products.destroy({ where: {
            id: id
        }});

        try {
            if (delProduct) {
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

module.exports = ProductController;
