const DB = require("../Models");
const saloon = DB.saloons;
const Owners = DB.owners;
const Barber = DB.barbers;

const create = async (req, res) => {
  const { name, address, lat, lng, owner_id } = req.body;
  if (!name || !address || !lat || !lng || !owner_id) {
    return res.status(400).send({
      status: false,
      message: "All fields are required.",
    });
  }
  const results = await saloon.create(req.body);
  if (results) {
    return res.status(200).send({
      status: true,
      data: results,
      message: "saloon added successfully",
    });
  } else {
    return res.status(500).send({
      status: false,
      message: "some thing went to wrong!!",
    });
  }
};

const findAll = async (req, res) => {
  const results = await saloon.findAll({
    include: [
      {
        model: Owners,
        attributes: ["first_name", "last_name", "mobile_number"],
      },
      { model: Barber, attributes: ["first_name", "last_name", "rating"] },
    ],
    attributes: {
      exclude: ["owner_id", "saloon_id", "createdAt", "updatedAt"],
    },
  });
  if (results) {
    return res.status(200).send({
      status: true,
      data: results,
      message: "successfully..",
    });
  } else {
    return res.status(500).send({
      status: false,
      message: "some thing went to wrong!!",
    });
  }
};

module.exports = {
  create,
  findAll,
};
