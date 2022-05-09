'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
    await queryInterface.createTable('admin', {
      adminId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      username:{
        type: Sequelize.STRING,
        allowNull:true
      },
      password:{
        type: Sequelize. STRING,
        allowNull:false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull:false
      },
        
      updatedAt:{
        type: Sequelize.DATE,
        allowNull:false
      }
    });
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('admin');

  }
};
