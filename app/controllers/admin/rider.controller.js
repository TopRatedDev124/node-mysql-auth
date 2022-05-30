const db = require("../models");
const user = db.user;

exports.saveuser = (req, res) => {
    console.log('wwwww=',req.body)
    user.create(
      req.body
    )
    .then(user => {
         res.send({ message: "User was registered successfully!" });
      })
    .catch(err => {
          res.status(500).send({ message: err.message });
        });

  };
exports.getuser = (req, res) => {
     user.findAll({}).then(user=>{
         res.status(200).send(user)
     })
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
