const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
exports.signup = (req, res) => {
  // Save User to Database
  console.log('wwwww=',req.body)
  User.create({
    FIRST_NAME: req.body.FIRST_NAME,
    LAST_NAME: req.body.LAST_NAME,
    USER_ROLE_ID:req.body.USER_ROLE_ID,
    MOBILE_PHONE: req.body.MOBILE_PHONE,
    CONTRACT_PHONE: req.body.CONTRACT_PHONE,
    EMAIL: req.body.EMAIL,
    PASSWORD: bcrypt.hashSync(req.body.PASSWORD, 8)
  })
  .then(user => {
    if (req.body.ROLES) {
      Role.findAll({
        where: {
          name: {
            [Op.or]: req.body.ROLES
          }
        }
      }).then(roles => {
        user.setRoles(roles).then(() => {
          res.send({ message: "User was registered successfully!",data:user });
        });
      });
    } else {
      // user role = 1
      
      user.setRoles([1]).then(() => {
        res.send({ message: "User was registered successfully!",data:user });
      });
    }
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.signin = (req, res) => {
  User.findOne({
    where: {
      EMAIL: req.body.EMAIL
    }
  })
    .then(user => {
      
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      
      
      var passwordIsValid = bcrypt.compareSync(
        req.body.PASSWORD,
        user.PASSWORD
      );
     
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      var token = jwt.sign({ id: user.ID }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }

        
        res.status(200).send({
          id: user.ID,
          username: user.FIRST_NAME,
          email: user.EMAIL,
          roles: authorities,
          accessToken: token
        });
      }).
      catch(err=>{
        console.log(err)
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.signout = (req, res) => {
  res.status(200).send(
    "logout"
  )

}