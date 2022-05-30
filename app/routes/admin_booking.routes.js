const { authJwt } = require("../middleware");
const controller = require("../controllers/admin/booking.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/admin/booking/cancel",
    [authJwt.isAdmin],
    controller.cancelBooking
  );
  app.post(
    "/api/admin/booking/fixprice",
    [authJwt.isAdmin],
    controller.fixPrice
  );
//   app.post(
//     "/api/admin/booking/reassign",
//     [authJwt.isAdmin],
//     controller.
//   )
};