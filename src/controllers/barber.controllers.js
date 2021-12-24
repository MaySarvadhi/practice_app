const DB = require("../Models");
const Barber = DB.barbers;
const Saloons = DB.saloons;

const create = async (req, res) => {
  const { first_name, last_name, saloon_id, rating } = req.body;
  if (!first_name || !last_name || !saloon_id) {
    return res.status(400).send({
      status: false,
      message: "All fields are required!",
    });
  }
  const results = await Barber.create(req.body);
  if (results) {
    return res.status(200).send({
      status: true,
      data: results,
      message: "barber added successfully!! ",
    });
  } else {
    res.status(500).send({
      status: false,
      message: "some thing went to wrong!",
    });
  }
};

const findAll = async (req, res) => {
  const results = await Barber.findAll({
    where: {},
    include: Saloons,
    attributes: { exclude: ["saloon_id"] },
  });
  if (results) {
    return res.status(200).send({
      status: true,
      data: results,
      message: "barber get successfully!! ",
    });
  } else {
    res.status(500).send({
      status: false,
      message: "some thing went to wrong!",
    });
  }
};

module.exports = {
  create,
  findAll,
};
