const config = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.airline = require("../models/airline.model.js")(sequelize, Sequelize);
db.booking_type = require("../models/booking_type.model.js")(sequelize, Sequelize);
db.booking = require("../models/booking.model.js")(sequelize, Sequelize);
db.modification_type = require("../models/nodification_type.model.js")(sequelize, Sequelize);
db.notification = require("../models/notification.model.js")(sequelize, Sequelize);
db.passenger_info = require("../models/passenger_info.model.js")(sequelize, Sequelize);
db.payment_method = require("../models/payment_method.model.js")(sequelize, Sequelize);
db.stop = require("../models/stop.model.js")(sequelize, Sequelize);
db.vehicle = require("../models/vehicle.model.js")(sequelize, Sequelize);
db.notification_type = require("../models/notification_type.model.js")(sequelize, Sequelize);
db.l_type = require("../models/location_type.model.js")(sequelize, Sequelize);
db.role.belongsToMany(db.user, {
  through: "user_roles",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",

});
db.user.belongsToMany(db.booking, {
  through:'user_booking'
});
db.booking.belongsToMany(db.user, {
  through:'user_booking'
});

db.notification_type.belongsToMany(db.notification,
{
  through:'n_n_type'
})
db.notification.belongsToMany(db.notification_type,
{
  through:'n_n_type'
})

db.booking.belongsToMany(db.booking_type,{
  through:'booking_booking_type',

})
db.booking_type.belongsToMany(db.booking,{
  through:'booking_booking_type',

})
db.booking.belongsToMany(db.l_type, {
  through: "booking_l_type",
});
db.l_type.belongsToMany(db.booking, {
  through: "booking_l_type",

});
db.booking.belongsToMany(db.airline, {
  through: "booking_airline",

});
db.airline.belongsToMany(db.booking, {
  through: "booking_airline",

});
db.booking.belongsToMany(db.vehicle, {
  through: "booking_vehicle",

});
db.vehicle.belongsToMany(db.booking, {
  through: "booking_vehicle",
});
db.booking.belongsToMany(db.passenger_info, {
  through: "booking_passenger_info",

});
db.passenger_info.belongsToMany(db.booking, {
  through: "booking_passenger_info",

});
db.sequelize.sync();
const Role = db.role;
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
db.ROLES = ["user", "admin", "moderator"];
module.exports = db;