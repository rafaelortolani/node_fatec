const Empresa = require("../model/empresaModel");

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
    return res.json('Empresa index');
}

async function listAll(req, res){
    const empresas = await Empresa.findAll();
    return res.json(empresas);
}

async function listById(req, res){
    const {codigo} = req.params;
    const empresa = await Empresa.findByPk(codigo)
    return res.json(empresa);
}

async function destroy(req, res){
    const {codigo} = req.params;
    const empresa = await Empresa.findByPk(codigo)
    empresa.destroy().then(function(rowDeleted){ // rowDeleted will return number of rows deleted
        if(rowDeleted != undefined){
            res.status(204).send('{"message":"Registro filho encontrado"}')
         }
      }, function(err){
            res.status(405).send('{"message":"Registro filho encontrado"}')
      });;
    ;
}

async function create(req, res){
    const empresa = req.body
    const newEmpresa = await Empresa.create(empresa);
    return res.status(200).send({
        status:1,
        message:'Empresa atualizada com sucesso',
        newEmpresa
    });
}

async function update(req, res){
    const {codigo} = req.params;
    const {emp_nome, emp_fantasia, emp_telefone, emp_fundacao} = req.body;
    const empresa = await Empresa.findByPk(codigo);
    if (hasValue(emp_nome)){
        empresa.emp_nome = emp_nome;
    }
    if (hasValue(emp_fantasia)){
        empresa.emp_fantasia = emp_fantasia;
    }
    if (hasValue(emp_telefone)){
        empresa.emp_telefone = emp_telefone;
    }
    if (hasValue(emp_fundacao)){
        empresa.emp_fundacao = emp_fundacao;
    }
    await empresa.save();
    return res.status(200).send({
        status:1,
        message:'Empresa atualizada com sucesso',
        empresa
    });
}


module.exports = {
    index,
    listAll,
    listById,
    destroy,
    create,
    update
}