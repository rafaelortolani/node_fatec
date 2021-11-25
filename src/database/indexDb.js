const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const conexao = new Sequelize(dbConfig);


conexao.authenticate().then(() =>{
     console.log('Conexao estabelecida');
 })
 .catch(error => {
     console.log('Conexão não estabelecida '+ error);
 });
    
module.exports = conexao;
