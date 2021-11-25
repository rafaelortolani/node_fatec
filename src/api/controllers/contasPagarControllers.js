const contaPagar = require("../model/contaPagarModel");

function hasValue(field){
    if (field === undefined){
        return false;
    }else if(field === ""){
        return false;
    }else{
        return true;
    }
}

function index (req, res){
    return res.json('Contas Pagar index');
}

async function listAll(req, res){
    const contas = await contaPagar.findAll();
    return res.json(contas);
}

async function listById(req, res){
    const {codigo} = req.params;
    const contas = await contaPagar.findByPk(codigo)
    return res.json(contas);
}

async function listByCompany(req, res){
    const {codigo} = req.params;
    const contas = await contaPagar.findAll({
                                                where: {
                                                emp_codigo: codigo
                                                }
                                            })
    return res.json(contas);
}


module.exports = {
    index,
    listAll,
    listById,
    listByCompany
}