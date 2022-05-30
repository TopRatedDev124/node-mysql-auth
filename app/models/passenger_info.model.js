module.exports = (sequelize, Sequelize) => {
    const Passenger_info = sequelize.define("passenger_infos", {
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
      CONTACT_NAME: {
        type: Sequelize.STRING
      },
      CONTACT_PHONE: {
        type: Sequelize.STRING
      },
      CONTACT_EMAIL: {
        type: Sequelize.STRING
      },
      ALIAS_NAMESIGN: {
        type: Sequelize.STRING
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
        field: 'created_at'
       },
      
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
      },
    });
    return Passenger_info;
  };