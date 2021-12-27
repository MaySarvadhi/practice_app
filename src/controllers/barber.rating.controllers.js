const DB = require("../Models");
const BarberRating = DB.barberRatings;
const Barber = DB.barbers;

const create = async (req, res) => {
  const { barbers_id, rating, user_id } = req.body;
  if (!barbers_id || !rating || !user_id) {
    return res.status(400).send({
      status: false,
      message: "All fields are require",
    });
  }
  try {
    const isBarberAvailable = await BarberRating.findOne({
      where: { barbers_id },
    });
    if (isBarberAvailable) {
      const users = JSON.parse(isBarberAvailable.user_id);
      const UserID = JSON.parse(user_id[1]);
      const userRated = users.includes(UserID);
      if (userRated) {
        return res.status(400).send({
          status: false,
          message: "already rated!!",
        });
      } else {
        users.push(UserID);
        const ratingAdd = rating + isBarberAvailable.rating;
        const passingData = JSON.stringify(users);
        const results = await BarberRating.update(
          {
            user_id: passingData,
            rating: ratingAdd,
          },
          { where: { id: isBarberAvailable.id } }
        );
        if (results) {
          const avg = ratingAdd / users.length;
          const updateBarberRating = await Barber.update(
            {
              rating: avg,
            },
            { where: { id: barbers_id } }
          );
          if (updateBarberRating) {
            return res.status(200).send({
              status: true,
              message: "rating added successfully!!",
            });
          } else {
            return res.status(500).send({
              status: false,
              message: "some thing went to wrong!!",
            });
          }
        } else {
          return res.status(500).send({
            status: false,
            message: "some thing went to wrong!!",
          });
        }
      }
    } else {
      const results = await BarberRating.create(req.body);
      if (results) {
        return res.status(200).send({
          status: true,
          message: "rating added successfully!!",
        });
      } else {
        return res.status(500).send({
          status: false,
          message: "some thing went to wrong!!",
        });
      }
    }
  } catch (error) {
    console.log("my error", error);
    return res.status(500).send({
      status: false,
      message: "some thing went to wrong!!",
    });
  }
};

module.exports = {
  create,
};
