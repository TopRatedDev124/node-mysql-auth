module.exports = (sequelize, Sequelize) => {
    const Notification = sequelize.define("Notifications", {
      user_id: {
        type: Sequelize.INTEGER
      },
      user_to_notify: {
        type: Sequelize.INTEGER
      },
      notification_type: {
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.STRING
      },
      is_read:{
        type: Sequelize.INTEGER
      },
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
        
      },
      created_by:{
        type:Sequelize.INTEGER
      },
      updated_by:{
        type:Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
       },
      
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
      },
    });
    return Notification;
  };