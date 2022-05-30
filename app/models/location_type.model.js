module.exports = (sequelize, Sequelize) => {
    const L_type = sequelize.define("location_type", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      location_type: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
    
    return L_type;
  };