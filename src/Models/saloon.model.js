module.exports = (Sequelize, sequelize) => {
  const Saloon = sequelize.define("saloons", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    owner_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "owners", // 'fathers' refers to table name
        key: "id", // 'id' refers to column name in fathers table
      },
    },
    name: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.STRING,
      defaultValue: 0,
    },
    lat: {
      type: Sequelize.STRING,
    },
    lng: {
      type: Sequelize.STRING,
    },
  });
  return Saloon;
};
