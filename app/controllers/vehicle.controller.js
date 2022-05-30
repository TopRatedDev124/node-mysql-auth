const db = require("../models");
const vehicle = db.vehicle;

exports.savevehicle = (req, res) => {
    console.log('wwwww=',req.body)
    vehicle.create(
      req.body
    )
    .then(vehicle => {
         res.send({ message: "User was registered successfully!" });
      })
    .catch(err => {
          res.status(500).send({ message: err.message });
        });

  };
exports.getvehicle = (req, res) => {
     vehicle.findAll({}).then(vehicle=>{
         res.status(200).send(vehicle)
     })
  };
exports.delete = (req, res) => {
    vehicle.destroy(
        {
        where:{
            id: req.body.id
        },
        
    }).then(status => {
        if (!status) {
            return res.status(404).send({ message: "Not found." });
          }
        else{
            vehicle.findAll({}).then(vehicle=>{
                 res.status(200).send(vehicle)
             })
        }

    })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
}
exports.update = (req, res) => {
    console.log(req.body)
    const result = vehicle.update(
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
            vehicle.findAll({}).then(vehicle=>{
                 res.status(200).send(vehicle)
             })
        }
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
    console.log(JSON.stringify(result, null, 2));
}
