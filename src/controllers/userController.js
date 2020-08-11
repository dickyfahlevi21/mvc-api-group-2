const { users, products, orders } = require("../models");

const response = {
  status: false,
  message: "",
  data: [],
};

const attUser = ['username', 'password', 'email', 'full_name'];
const attProduct = ['name', 'price', 'weight', 'photo'];
<<<<<<< HEAD:src/controllers/userController.js
const attOrder = ['address', 'postcode', 'status', 'shipment_detail'];
=======
const attOrder = ['address', 'postcode', 'statu', 'shipment_detail'];
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c:src/controller/userController.js

class UserController {

    static async getUsers(req, res){
        try {
            const findUsers = await users.findAll({
                attributes: attUser,
                include: [{
                    model: products,
                    attributes: attProduct,
                    include: [{
                        model: orders,
                        attributes: attOrder
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
<<<<<<< HEAD:src/controllers/userController.js
            const saveUser = await users.create({
=======
            const saveUser = await authors.create({
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c:src/controller/userController.js
                username, password, email, full_name
            });
            response.data = {
                username: saveUser.username,
                password: saveUser.password,
                email: saveUser.email,
<<<<<<< HEAD:src/controllers/userController.js
                full_name:saveUser.full_name
=======
                full_name: saveUser.full_name
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c:src/controller/userController.js
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

<<<<<<< HEAD:src/controllers/userController.js
    static async getUser(req, res) {
=======
    static async getUsers(req, res) {
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c:src/controller/userController.js
        const { id } = req.params;
        const userDetail = await users.findByPk(
            id, {
                attributes: attUser,
                include: [{
                    model: products,
                    attributes: attProduct,
                    include: [{
                        model: orders,
                        attributes: attOrder
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
                            model: products,
                            attributes: attProduct,
                            include: [{
                                model: orders,
                                attributes: attOrder
                            }] 
                        }]
                    }
                );
                res.status(200).json(response);
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
<<<<<<< HEAD:src/controllers/userController.js
        const delUsers = await users.destroy({ where: {
=======
        const delUser = await users.destroy({ where: {
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c:src/controller/userController.js
            id: id
        }});

        try {
<<<<<<< HEAD:src/controllers/userController.js
            if (delUsers) {
=======
            if (delUser) {
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c:src/controller/userController.js
                response.status = true;
                response.data = `ID : ${id}`;
                response.message = `Data author berhasil dihapus`;
                res.status(200).json(response);
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