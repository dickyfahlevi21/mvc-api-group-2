const { users, products, orders } = require("../models");

const response = {
  status: false,
  message: "",
  data: [],
};

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
                },{
                    model: users,
                    attributes: attUser
                }]
            });
            if (findOrder.length !== 0) {
                response.status = true;
                response.data = findOrder;
                response.message = "Data ditemukan!";
                res.status(200).json(response);
            } else {
                response.data = '';
                response.status = false;
                response.message = "Data tidak ditemukan!";
                res.status(400).json(response);
            }
        } catch (err) {
            response.data = '';
            response.status = false;
            response.message = err.message;
            res.status(400).json(response);
        }
    }

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
                },{
                    model: users,
                    attributes: attUser
                }]
            }
        );
        try {
            if (orderDetail) {
                response.status = true;
                response.data = orderDetail;
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
                        },{
                            model: users,
                            attributes: attUser
                        }]
                    });
                res.status(200).json(response);
            } else {
                response.data = '';
                response.status = false;
                response.message = "Data gagal diubah!";
                res.status(400).json(response);
            }
        } catch (err) {
            response.data = '';
            response.status = false;
            response.message = err.message;
            res.status(400).json(response);
        }
    }

    static async deleteOders(req, res) {
        const { id } = req.params;
        const delComment = await orders.destroy({ where: {
            id: id
        }});

        try {
            if (delComment) {
                response.status = true;
                response.message = `Data berhasil dihapus`;
                response.data = `ID : ${id}`
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

module.exports = OrderController;
