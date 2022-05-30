const db = require("../models");
const Booking = db.booking;
const Booking_type = db.booking_type;
const Op = db.Sequelize.Op;

exports.saveBooking = (req, res) => {
    console.log('wwwww=',req.body)
    Booking.create(
      req.body
    )
    .then(booking => {
        console.log(booking)
        if (req.body.booking_type_id) {
            Booking_type.findAll({
                where: {
                  booking_type: req.body.booking_type_id
                }
              }).then(roles => {
                booking.setBooking_types(roles).then(() => {
                  res.send({ message: "User was registered successfully!" });
                });
              });
          }
      else {
          // Booking role = 1
          booking.setBooking_types([1]).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
          res.send({ message: "Booking was registered successfully!" });
        }
      })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });

  };
exports.getBooking = (req, res) => {
     const result =Booking.findAll({include:[db.user,db.vehicle,db.passenger_info]}).then(booking=>{
         res.status(200).send(booking)
     })
     console.log(JSON.stringify(result, null, 2));
  };
exports.status_update = (req, res) => {
    Booking.update(
        {
          book_status:req.body.book_status,
          updated_by:req.userId
        },{
        where:{
            id: req.body.id
        },
        
    }).then(status => {
        if (!status) {
            return res.status(404).send({ message: "Not found." });
          }
        else{
            res.status(200).send(true)
        }

    })
}
exports.update = (req, res) => {
    Booking.update(
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
}
