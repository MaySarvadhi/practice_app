module.exports = (Sequelize, sequelize) => {
  const Owner = sequelize.define("owners", {
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
    mobile_number: {
      type: Sequelize.STRING,
    },
  });
  return Owner;
};
