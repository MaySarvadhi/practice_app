const Sequelize = require("sequelize");
const sequelize = new Sequelize("saloon", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3307,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.owners = require("./owner.model")(Sequelize, sequelize);
db.saloons = require("./saloon.model")(Sequelize, sequelize);
db.owners.hasMany(db.saloons, {
  foreignKey: "owner_id",
});
db.saloons.belongsTo(db.owners, {
  foreignKey: "owner_id",
});
module.exports = db;
