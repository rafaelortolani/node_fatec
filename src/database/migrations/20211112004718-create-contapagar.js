'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('contapagar', { 
      tpg_codigo: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true},
      tpg_descricao: {
        type:Sequelize.STRING(20),
        allowNull:false
      },
      tpg_tipo: {
        type:Sequelize.STRING(10),
        allowNull:false
      },
      tpg_valor: {
        type:Sequelize.NUMERIC(12,2),
        allowNull:false
      },
      tpg_vencimento: {
        type:Sequelize.STRING,
        allowNull:false
      },
      emp_codigo: {
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:{
              tableName:'empresa'},
            key:'emp_codigo'
        }
      },
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
    await queryInterface.dropTable('contapagar');
    
  }
};
