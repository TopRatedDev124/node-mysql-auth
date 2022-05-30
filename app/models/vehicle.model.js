module.exports = (sequelize, Sequelize) => {
    const Vehicle = sequelize.define("vehicles", {
      vehicle_image: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      max_passenger:{
        type: Sequelize.INTEGER
      },
      rate:{
        type:Sequelize.DOUBLE
      },
      max_bags:{
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
    return Vehicle;
  };