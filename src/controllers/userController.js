const { users, products, orders } = require("../models");

const response = {
  status: false,
  message: "",
  data: [],
};

const attUser = ['username', 'password', 'email', 'full_name'];
const attProduct = ['name', 'price', 'weight', 'photo'];
const attOrder = ['address', 'postcode', 'status', 'shipment_detail', 'shipment_price'];

class UserController {

    static async getUsers(req, res){
        try {
            const findUsers = await users.findAll({
                attributes: attUser,
                include: [{
                    model: orders,
                    attributes: attOrder,
                    include: [{
                        model: products,
                        attributes: attProduct
                    }] 
                }]
            });
            if (findUsers.length !== 0) {
                response.data = findUsers;
                response.status = true;
                response.message = "Data found!"
                res.status(200).json(response);
            } else {
                response.data = '';
                response.status = false;
                response.message = "Data not found!";
                res.status(400).json(response);
            }
        } catch (err) {
            response.data = '';
            response.status = false;
            response.message = err.message;
            res.status(400).json(response);
        }
    }

    static async saveUsers(req, res) {
        const {
            body: {username, password, email, full_name}
        } = req;

        try {
            const saveUser = await users.create({
                username, password, email, full_name
            });
            response.data = {
                username: saveUser.username,
                password: saveUser.password,
                email: saveUser.email,
                full_name:saveUser.full_name
            };
            response.status = true;
            response.message = "Berhasil tambah data"
            res.status(201).json(response);
        } catch (error) {
            response.status = "fail!";
            response.data = '';
            response.message = error.message;
            res.status(400).json(response);
        }
    }

    static async getUser(req, res) {
        const { id } = req.params;
        const userDetail = await users.findByPk(
            id, {
                attributes: attUser,
                include: [{
                    model: orders,
                    attributes: attOrder,
                    include: [{
                        model: products,
                        attributes: attProduct
                    }]
                }]
            }
        );
        try {
            if (userDetail) {
                response.status = true;
                response.data = userDetail;
                response.message = "Data ditemukan!";
                res.status(200).json(response);
            } else {
                response.status = false;
                response.data = '';
                response.message = "Data tidak ditemukan!";
                res.status(400).json(response);
            }
        } catch (error) {
          response.message = error.message;
          response.status = false;
          response.data = '';
          res.status(404).json(response);
        }
    }
    
    static async updateUsers(req, res) {
        const { id } = req.params;
        const { username, password, email, full_name } = req.body;
        const auth = await users.update({ username, password, email, full_name },
        { where: { id: id } });

        try {
            if (auth) {
                response.status = true;
                response.message = `Data author berhasil diedit`;
                response.data = await users.findByPk(
                    id, {
                        attributes: attUser,
                        include: [{
                            model: orders,
                            attributes: attOrder,
                            include: [{
                                model: products,
                                attributes: attProduct
                            }] 
                        }]
                    }
                );
                res.status(200).json(response);
            } else {
                response.status = false;
                response.data = '';
                response.message = "Data tidak ditemukan!";
                res.status(400).json(response);
            }
        } catch (err) {
            response.status = false;
            response.data = '';
            response.message = err.message;
            res.status(400).json(response);
        }
    }

    static async deleteUsers(req, res) {
        const { id } = req.params;
        const delUsers = await users.destroy({ where: {
            id: id
        }});

        try {
            if (delUsers) {
                response.status = true;
                response.data = `ID : ${id}`;
                response.message = `Data author berhasil dihapus`;
                res.status(200).json(response);
            } else {
                response.status = false;
                response.data = '';
                response.message = "Data tidak ditemukan!";
                res.status(400).json(response);
            }
        } catch (err) {
            response.status = false;
            response.data = '';
            response.message = err.message;
            res.status(400).json(response);
        }
    }
}

module.exports = UserController;