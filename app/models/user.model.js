module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      FIRST_NAME: {
        type: Sequelize.STRING
      },
      LAST_NAME: {
        type: Sequelize.STRING
      },
      MOBILE_PHONE: {
        type: Sequelize.STRING
      },
      EMAIL: {
        type: Sequelize.STRING
      },
      CONTACT_PHONE: {
        type: Sequelize.STRING
      },
      USER_ROLE_ID: {
        type: Sequelize.INTEGER
      },
      PASSWORD: {
        type:Sequelize.STRING
      },
      ID: {
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
        field: 'CREATED_AT'
       },
      
      updatedAt: {
        type: Sequelize.DATE,
        field: 'UPDATED_AT'
      },
    });
    return User;
  };