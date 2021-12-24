const DB = require("../Models");
const BarberRating = DB.barberRatings;

const create = async (req, res) => {
  const { barber_id, rating, user_id } = req.body;
  if (!barber_id || !rating || !user_id) {
    return res.status(400).send({
      status: false,
      message: "All fields are require",
    });
  }
};

module.exports = {
  create,
};
