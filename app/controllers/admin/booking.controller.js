const req = require("express/lib/request");
const db = require("../models");
const Booking = db.booking;

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
exports.cancelBooking = (req, res) => {
    Booking.update(
        {
            book_status:'canceled'
        },
    {
        where: {
            id: req.body.id
          }
    }).then(status => {
        if (!status) {
            return res.status(404).send({ message: "Not found." });
          }
        else{
            res.status(200).send(true)
        }

    })
}
exports.fixPrice = (req, res)=>{
    Booking.update(
        {
            estimate_price:req.body.estimate_price
        },
    {
        where: {
            id: req.body.id
          }
    }).then(status => {
        if (!status) {
            return res.status(404).send({ message: "Not found." });
          }
        else{
            res.status(200).send(true)
        }

    })
}
