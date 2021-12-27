module.exports = (Sequelize, sequelize) => {
  const BarberRating = sequelize.define("barber_rating", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    barbers_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "barbers", // 'fathers' refers to table name
        key: "id", // 'id' refers to column name in fathers table
      },
    },
    rating: {
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: Sequelize.STRING,
    },
  });
  return BarberRating;
};
