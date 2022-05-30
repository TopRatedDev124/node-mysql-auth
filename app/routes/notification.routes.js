const { authJwt } = require("../middleware");
const controller = require("../controllers/notification.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/notification/create",
    [authJwt.verifyToken],
    controller.savenotification
  );
  app.get(
    "/api/notification/get",
    [authJwt.verifyToken],
    controller.getnotification
  );
  app.post(
    "/api/notification/update",
    [authJwt.verifyToken],
    controller.update
  );
};