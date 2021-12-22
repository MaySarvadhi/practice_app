const DB = require("../Models");
const Owner = DB.owners;
const create = async (req, res) => {
  const { first_name, last_name, mobile_number } = req.body;
  if (!first_name || !last_name || !mobile_number) {
    return res.status(400).send({
      status: false,
      message: "All fields are required.",
    });
  }
  const isOwnerAvailable = await Owner.findOne({ where: { mobile_number } });
  if (isOwnerAvailable) {
    return res.status(400).send({
      status: false,
      message: "Owner is already available.",
    });
  }
  const results = await Owner.create(req.body);
  if (results) {
    return res.status(200).send({
      status: true,
      message: "Owner add successfully.",
      data: results,
    });
  } else {
    return res.status(500).send({
      status: false,
      message: "Something went to wrong.",
      error: error,
    });
  }
};
module.exports = {
  create,
};
