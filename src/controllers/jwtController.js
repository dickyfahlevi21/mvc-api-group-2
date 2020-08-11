<<<<<<< HEAD
const { users,products,orders } = require("../models");
=======
const { authors, posts, comments } = require("../models");
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
const { registerValidation, loginValidation } = require("../../validation");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const response = {
  status: false,
  message: "",
  data: [],
};

class LoginController {

  static async login(req, res) {
    const { username, password } = req.body;

    // validate author's login
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).json(error.details[0].message)

    // Check if it existing author's username
<<<<<<< HEAD
    const user = await users.findOne({ where: { username: username } })
    if (!user) return res.status(400).json('Username is not found!')

    // Valid Password
    // if(author.password == password) return res.send('Logged in!')
    if(user.password != password) return res.status(400).send('Invalid password')
=======
    const author = await authors.findOne({ where: { username: username } })
    if (!author) return res.status(400).json('Username is not found!')

    // Valid Password
    // if(author.password == password) return res.send('Logged in!')
    if(author.password != password) return res.status(400).send('Invalid password')
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
    // const validPass = await bcrypt.compare(password, author.password);
    // if (!validPass) return res.status(400).send('invalid password!')

    // Create and send a token
<<<<<<< HEAD
    const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
=======
    const token = jwt.sign({ id: author.id }, process.env.TOKEN_SECRET);
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
    res.header('auth-token', token).send(token);
  }

  static async register(req, res) {
<<<<<<< HEAD
    const { username, password, email,full_name } = req.body;
=======
    const { username, password, email } = req.body;
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c

    // validate before become author
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).json(error.details[0].message)

    // Check if it existing author's email
    const emailExist = await authors.findOne({ where: { email: email } })

    // Check if it existing author's username
    const usernameExist = await authors.findOne({ where: { username: username } })

    // Hash passwords
<<<<<<< HEAD
//    const salted = await bcrypt.genSalt(10);
//    const hashedPassword = await bcrypt.hash(password, salted);
=======
    const salted = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salted);
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c

    try {
      if (usernameExist) return res.status(404).json('Username already exists')
      else if (emailExist) return res.status(404).send('Email already exists')
      else {
<<<<<<< HEAD
        const savedUser = await authors.create({
          username, password, email, full_name
        });
        response.data = {
          Username: savedUser.username,
          Email: savedUser.email,
          Full_Name: savedUser.full_name
=======
        const savedAuthor = await authors.create({
          username, password, email, salt: hashedPassword
        });
        response.data = {
          Username: savedAuthor.username,
          Salt: savedAuthor.salt,
          Email: savedAuthor.email,
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
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
