module.exports = (sequelize, Sequelize) => {
    const notificaion_type = sequelize.define("notification_type", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      notification_type: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
    return notificaion_type;
  };