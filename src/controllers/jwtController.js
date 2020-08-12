const { users } = require("../models");
const { registerValidation, loginValidation } = require("../../validation");
const jwt = require('jsonwebtoken');

const response = {
  status: false,
  message: "",
  data: [],
};

class LoginController {

  static async login(req, res) {
    const { username, password } = req.body;

    const { error } = loginValidation(req.body);
    if(error) return res.status(400).json(error.details[0].message)

    const user = await users.findOne({ where: { username: username } })
    if (!user) return res.status(400).json('Username is not found!')

    if(user.password != password) return res.status(400).send('Invalid password')

    const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).json({
      "message": "Logged in!",
      "API Key": token
    });
  }

  static async register(req, res) {
    const { username, password, email, full_name } = req.body;

    const { error } = registerValidation(req.body);
    if(error) return res.status(400).json(error.details[0].message)

    const emailExist = await users.findOne({ where: { email: email } })

    const usernameExist = await users.findOne({ where: { username: username } })

    try {
      if (usernameExist) return res.status(404).json('Username already exists')
      else if (emailExist) return res.status(404).send('Email already exists')
      else {
        const savedUser = await users.create({
          username, password, email, full_name
        });
        response.data = {
          Username: savedUser.username,
          Email: savedUser.email,
          Full_Name: savedUser.full_name
        };
        response.status = true;
        response.message = "Berhasil tambah data"
        res.status(201).json(response);
      }
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

module.exports = LoginController;
