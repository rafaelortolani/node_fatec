const { Model, DataTypes, Sequelize} = require('sequelize');
const configConn = require('../../config/database')
const sequelize = new Sequelize(configConn);

class Empresa extends Model {}
Empresa.init({
        emp_codigo: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        emp_nome:{type: DataTypes.STRING},
        emp_fantasia:{type: DataTypes.STRING},
        emp_telefone:{type:  DataTypes.STRING},
        emp_fundacao:{type:  DataTypes.STRING},
        createdAt:{type:  DataTypes.DATE},
        updatedAt:{type:  DataTypes.DATE}
    },{
        sequelize,
        modelName:'Empresa'
    });

module.exports = Empresa;