module.exports = (sequelize, Sequelize) => {
    const Vehicle = sequelize.define("stop", {
      booking_id: {
        type: Sequelize.INTEGER
      },
      location_type_id: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
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
    return Vehicle;
  };