const db = require("../models");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
exports.userBoard = (req, res) => {
  res.status(200).send("User Content,",req.userId);

};
exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};
exports.moderatorBoard = (req, res) => {

  res.status(200).send("Moderator Content.");
};
exports.updateprofile = (req,res) => {
  console.log('wwwww=',req.body)
  console.log('id=',req.userId);
  User.update(
    req.body,
    {
    where: {
      ID: req.userId
    }
  })
  .then(status => {
    if (!status) {
      return res.status(404).send({ message: "User Not found." });
    }
    User.findOne({
      where: {
        ID: req.userId
      }
    }).then(user=>{
        if (req.body.USER_ROLE_ID > 0){
          user.setRoles(req.body.USER_ROLE_ID).then(() => {
               console.log('updated ')
              }).then(()=>{
                console.log('user=',user.USER_ROLE_ID)
                let authorities = [];
                user.getRoles().then(roles => {
                for (let i = 0; i < roles.length; i++) {
                  authorities.push("ROLE_" + roles[i].name.toUpperCase());
                }
                
                res.status(200).send({
                  id: user.ID,
                  username: user.FIRST_NAME,
                  email: user.EMAIL,
                  roles: authorities
                });
              });})
            }
              else{
                res.status(200).send({
                  id: user.ID,
                  username: user.FIRST_NAME,
                  email: user.EMAIL
                });
              }
      })
      .catch(err=>{
        console.log(err)
      })
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });

}
exports.getdrivers = (req, res) =>{
   Role.findOne({
      where: {
        name: 'driver'
      }
    }).then(role=>{
      if (role)
        User.findAll({
          where:{
            USER_ROLE_ID: role.id
          }
        }).then(users=>{
          res.status(200).send(users)
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
      });
        else {
          res.status(200).send({message: 'there is no driver'})
        }
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
}
exports.update = (req, res) => {
    console.log(req.body)
    User.update(
        req.body,
        {
            where:{
                ID:req.body.ID
            }
        }
    ).then(status => {
        if (!status) {
            return res.status(404).send({ message: "User Not found." });
        }
        else{
           Role.findOne({
            where: {
              name: 'driver'
            }
          }).then(role=>{
            if (role)
            User.findAll({
              where:{
                USER_ROLE_ID:role.id
              }
            }).then(user=>{
                 res.status(200).send(user)
             })
          })
        }
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });

}
