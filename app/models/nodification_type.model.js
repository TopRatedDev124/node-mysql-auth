module.exports = (sequelize, Sequelize) => {
    const Notification_type = sequelize.define("Notification_type", {
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
    return Notification_type;
  };