'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('empresa', { 
      emp_codigo: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true},
      emp_nome: {
        type:Sequelize.STRING(30),
        allowNull:false}, 
      emp_fantasia: {
        type:Sequelize.STRING(15),
        allowNull:false},  
      emp_telefone: {
        type:Sequelize.STRING(15),
        allowNull:false}, 
      emp_fundacao: {
        type:Sequelize.INTEGER,
        allowNull:false},
      createdAt: {
          type:Sequelize.DATE,
          allowNull:false
        },
      updatedAt: {
          type:Sequelize.DATE,
          allowNull:false
        },
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('empresa');
  }
};
