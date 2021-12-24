module.exports = (Sequelize, sequelize) => {
  const barber = sequelize.define("barbers", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    saloon_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "saloons", // 'fathers' refers to table name
        key: "id", // 'id' refers to column name in fathers table
      },
    },
    rating: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });
  return barber;
};
