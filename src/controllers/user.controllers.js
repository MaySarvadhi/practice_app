const DB = require("../Models");
const User = DB.user;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const create = async (req, res) => {
  const { first_name, last_name, mobile_number, password } = req.body;
  if (!first_name || !last_name || !mobile_number || !password) {
    return res.status(400).send({
      status: false,
      message: "All fields are required!!",
    });
  }
  const isAvailable = await User.findOne({
    where: { mobile_number },
  });
  if (isAvailable) {
    return res.status(400).send({
      status: false,
      message: "Mobile Number already exits!!",
    });
  } else {
    const hasPassword = await bcrypt.hash(password, 10);
    req.body.password = hasPassword;
    const results = await User.create(req.body);
    if (results) {
      return res.status(200).send({
        status: true,
        data: results,
        message: "User added successfully!!",
      });
    } else {
      return res.status(500).send({
        status: false,
        message: "Something went to wrong!!",
      });
    }
  }
};

const login = async (req, res) => {
  const { mobile_number, password } = req.body;
  let response = {};
  if (!mobile_number || !password) {
    return res.status(400).send({
      status: false,
      message: "Mobile Number and Password are require!!",
    });
  }
  const isAvailableUser = await User.findOne({
    where: { mobile_number },
  });
  response = isAvailableUser;
  if (isAvailableUser) {
    const passwordValidator = await bcrypt.compare(
      password,
      isAvailableUser.password
    );
    if (passwordValidator) {
      const token = await jwt.sign({ user_id: isAvailableUser.id }, "Token");
      response.access_token = token;
      return res.status(200).send({
        status: true,
        message: "User Login SuccessFully...",
        data: {
          first_name: response.first_name,
          last_name: response.last_name,
          mobile_number: response.mobile_number,
          token,
        },
      });
    } else {
      return res.status(400).send({
        status: true,
        message: "Invalided Username Or Password",
      });
    }
  } else {
    return res.status(404).send({
      status: false,
      message: "User is not exits!!",
    });
  }
};

module.exports = {
  create,
  login,
};
