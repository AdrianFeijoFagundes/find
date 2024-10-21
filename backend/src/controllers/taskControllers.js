import taskServices from "../services/taskServices.js"

function listar(req, res) {
    taskServices.listar(function(err, result){
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json();
        }
    })

    //res.status(200).send('GET')
    // Acessar banco de dados
}

function inserir(req, res) {
    
    taskServices.inserir()
    //res.status(201).send('POST')
}

function editar(req, res) {
    taskServices.editar()
    //res.status(200).send('PUT')
}

function excluir(req, res) {
    taskServices.excluir()
    //res.status(200).send('DELETE')
}
export default {
    listar,
    inserir,
    editar,
    excluir 
};