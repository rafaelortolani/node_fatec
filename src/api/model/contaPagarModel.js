const { Model, DataTypes, Sequelize} = require('sequelize');
const configConn = require('../../config/database')
const sequelize = new Sequelize(configConn);

class ContaPagar extends Model {}
ContaPagar.init({
        tpg_codigo: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tpg_descricao:{type: DataTypes.STRING},
        tpg_tipo:{type: DataTypes.STRING},
        tpg_valor:{type:  DataTypes.NUMBER},
        tpg_vencimento:{type:  DataTypes.STRING},
        emp_codigo:{type:  DataTypes.INTEGER},
        createdAt:{type:  DataTypes.DATE},
        updatedAt:{type:  DataTypes.DATE}
    },{
        sequelize,
        modelName:'ContaPagar'
    });

module.exports = ContaPagar;