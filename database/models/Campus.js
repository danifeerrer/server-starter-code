/*==================================================
/database/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://cdn.pixabay.com/photo/2020/02/16/20/29/nyc-4854718_960_720.jpg",
  },

  description: {
    type: Sequelize.STRING  
  }
});

// Export the campus model
module.exports = Campus;