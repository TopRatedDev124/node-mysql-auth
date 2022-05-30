const { authJwt } = require("../middleware");
const controller = require("../controllers/booking.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/booking/create",
    [authJwt.verifyToken],
    controller.saveBooking
  );
  app.get(
    "/api/booking/get",
    [authJwt.verifyToken],
    controller.getBooking
  );
  app.post(
    "/api/booking/update_status",
    [authJwt.verifyToken],
    controller.status_update
  );
  app.post(
    "/api/booking/update",
    [authJwt.verifyToken],
    controller.update
  );
};