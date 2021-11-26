const ContaPagar = require("../model/contaPagarModel");
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
    const contaPagar = req.body
    console.log(contaPagar);
    const newContaPagar = await ContaPagar.create(contaPagar);
    return res.status(200).send({
        status:1,
        message:'Conta criada com sucesso',
        contaPagar:newContaPagar
    });
}

async function destroy(req, res){
    const {codigo} = req.params;
    const contaPagar = await ContaPagar.findByPk(codigo)
    contaPagar.destroy().then(() =>{
        return res.status(204).send({
            status:1,
            message:'Conta a pagar excluida com sucesso'
        });    
    }).catch(error =>{
        return res.status(409).send({
            status:2,
            message:'Não foi possivel excluir conta a pagar',
            error
        });
    });
}


async function update(req, res){
    const {codigo} = req.params;
    const {tpg_descricao, tpg_tipo, tpg_valor, tpg_vencimento, emp_codigo} = req.body;
    const contaPagar = await ContaPagar.findByPk(codigo);
    if (hasValue(tpg_descricao)){
        contaPagar.tpg_descricao = tpg_descricao;
    }
    if (hasValue(tpg_tipo)){
        contaPagar.tpg_tipo = tpg_tipo;
    }
    if (hasValue(tpg_valor)){
        contaPagar.tpg_valor = tpg_valor;
    }
    if (hasValue(tpg_vencimento)){
        contaPagar.emp_fundacao = tpg_vencimento;
    }
    if (hasValue(emp_codigo)){
        contaPagar.emp_codigo = emp_codigo;
    }
    try {
        await contaPagar.save();
        return res.status(200).send({
            status:1,
            message:'Conta a pagar atualizada com sucesso',
            contaPagar
        });    
    } catch (error) {
        return res.status(409).send({
            status:2,
            message:'Não foi possivel atualizar conta a pagar',
            error
        });
    }
    
}
module.exports = {
    index,
    listAll,
    listById,
    listByCompany,
    create,
    destroy,
    update
}