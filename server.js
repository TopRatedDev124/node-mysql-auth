const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require('body-parser');
const db = require("./app/models");
const Role = db.role
var corsOptions = {
  origin: "http://localhost:3000"
};

// parse requests of content-type - application/json
// app.use(express.json());
// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));
// simple route

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/booking.routes')(app);
require('./app/routes/vehicle.routes')(app);
require('./app/routes/notification.routes')(app); 


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
db.sequelize.sync();
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
// });
