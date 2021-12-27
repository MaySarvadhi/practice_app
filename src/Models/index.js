const Sequelize = require("sequelize");
const sequelize = new Sequelize("saloon", "root", "root", {
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3307,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.owners = require("./owner.model")(Sequelize, sequelize);
db.saloons = require("./saloon.model")(Sequelize, sequelize);
db.barbers = require("./barber.model")(Sequelize, sequelize);
db.user = require("./user.model")(Sequelize, sequelize);
db.barberRatings = require("./barber.rating.model")(Sequelize, sequelize);

db.barbers.hasMany(db.barberRatings, {
  foreignKey: "barbers_id",
});
db.barberRatings.belongsTo(db.barbers, {
  foreignKey: "barbers_id",
});
db.saloons.hasMany(db.barbers, {
  foreignKey: "saloon_id",
});
db.barbers.belongsTo(db.saloons, {
  foreignKey: "saloon_id",
});
db.owners.hasMany(db.saloons, {
  foreignKey: "owner_id",
});
db.saloons.belongsTo(db.owners, {
  foreignKey: "owner_id",
});
module.exports = db;
