module.exports = (sequelize, Sequelize) => {
    const Payment_method = sequelize.define("Payment_method", {
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
    return Payment_method;
  };