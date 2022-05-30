module.exports = (sequelize, Sequelize) => {
    const Airline = sequelize.define("Airlines", {
      flightnumber: {
        type: Sequelize.STRING
      },
      arrival_time: {
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
    return Airline;
  };