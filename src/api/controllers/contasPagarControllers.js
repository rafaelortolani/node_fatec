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

async function create(req, res){
    const contaPagarReq = req.body
    const contaPagar = await Empresa.create(contaPagarReq);
    return res.status(200).send({
        status:1,
        message:'Empresa atualizada com sucesso',
        contaPagar
    });
}

async function destroy(req, res){
    const {codigo} = req.params;
    const contaPagar = await Empresa.findByPk(codigo)
    contaPagar.destroy()
    res.status(204).send({
        status:1,
        message:'Conta a pagar excluida',
        empresa
    });
}


module.exports = {
    index,
    listAll,
    listById,
    listByCompany,
    create,
    destroy
}