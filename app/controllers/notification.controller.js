const db = require("../models");
const notification = db.notification;
const notification_type = db.notification_type
exports.savenotification = (req, res) => {
    console.log('wwwww=',req.body)
    notification.create(
      req.body
    )
    .then(notification => {
         res.send({ message: "User was registered successfully!" });
      })
    .catch(err => {
          res.status(500).send({ message: err.message });
        });

  };
exports.getnotification = (req, res) => {
     const result = notification.findAll({include:notification_type,as:'type'}).then(notification=>{
         res.status(200).send(notification)
     })
     console.log(JSON.stringify(result, null, 2));
  };
exports.update = (req, res) => {
    vehicle.update(
        req.body,
        {
            where:{
                id:req.body.id
            }
        }
    ).then(status => {
        if (!status) {
            return res.status(404).send({ message: "User Not found." });
        }
        else{
            
            res.status(200).send(true)
        }
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
}
