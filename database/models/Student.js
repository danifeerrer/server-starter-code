/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://th.bing.com/th/id/OIP.QBZjo4yOGxD-6Zb9TNiucwHaG5?pid=ImgDet&rs=1",
  }, 

  email: {
    type: Sequelize.STRING,
    allowNull: false, 
  },
  
  gpa: {
    type: Sequelize.FLOAT,
  }
});

// Export the student model
module.exports = Student;