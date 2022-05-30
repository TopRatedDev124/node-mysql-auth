module.exports = (sequelize, Sequelize) => {
    const B_type = sequelize.define("Booking_type", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      booking_type: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
    return B_type;
  };