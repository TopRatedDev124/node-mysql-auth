module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define("Bookings", {
      booking_status: {
        type: Sequelize.INTEGER
      },
      booking_type_id: {
        type: Sequelize.STRING
      },
      trip_duration_hour: {
        type: Sequelize.INTEGER
      },
      trip_duration_min: {
        type: Sequelize.INTEGER
      },
      ride_now: {
        type: Sequelize.STRING
      },
      pickup_date: {
        type: Sequelize.STRING
      },
      pickup_location_type_id: {
        type: Sequelize.INTEGER
      },
      pickup_location: {
        type: Sequelize.STRING
      },
      pickup_air_id: {
        type: Sequelize.INTEGER
      },
      drop_location_type_id: {
        type: Sequelize.INTEGER
      },
      dropoff_location: {
        type: Sequelize.STRING
      },
      dropoff_air_id:{
        type: Sequelize.INTEGER
      },
      passenger:{
        type: Sequelize.INTEGER
      },
      children:{
        type: Sequelize.INTEGER
      },
      bags:{
        type: Sequelize.INTEGER
      },
      vehicle_id:{
        type: Sequelize.INTEGER
      },
      user_info_id:{
        type: Sequelize.INTEGER
      },
      special_instruction : {
        type: Sequelize.STRING
      },
      estimate_price : {
          type: Sequelize.FLOAT
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
    return Booking;
  };