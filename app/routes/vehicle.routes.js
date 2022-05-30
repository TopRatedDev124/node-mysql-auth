const { authJwt } = require("../middleware");
const controller = require("../controllers/vehicle.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/vehicle/create",
    [authJwt.verifyToken],
    controller.savevehicle
  );
  app.get(
    "/api/vehicle/get",
    [authJwt.verifyToken],
    controller.getvehicle
  );
  app.post(
    "/api/vehicle/update",
    [authJwt.verifyToken],
    controller.update
  );
  app.post(
    "/api/vehicle/delete",
    [authJwt.verifyToken],
    controller.delete
  );
};