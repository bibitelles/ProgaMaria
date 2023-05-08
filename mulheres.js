const express = require("express")
const router = express.Router()
const cors = require("cors") // permite que outros dominios acessem a api

//ligando ao arquivo bancodedados.js
const conectaBancodeDados= require('./BancoDeDados')
//inicia a função
conectaBancodeDados()

const Mulher = require('./MulherModel')

const app = express()
app.use(express.json())
app.use(cors())
const porta = 3333


//GET
async function mostraMulheres(request, response) {
    try {
        const mulheresVindasDoBanco = await Mulher.find()
        response.json(mulheresVindasDoBanco)
    }
    catch (erro) {
        console.log(erro)
    }
}

//POST
async function criaMulher(request, response) {
    const novaMulher = new Mulher ({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        const MulherCriada = await novaMulher.save()
    response.status(201).json(MulherCriada)
    }
    catch (erro) {
        console.log(erro)
    }
}

//PATCH
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)
        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome
        }
    
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }
        if (request.body.citacao) {
            mulherEncontrada.citacao = request.body.citacao
        }

        const mulherAtualizada = await mulherEncontrada.save()

        response.json(mulherAtualizada) 
    }
    catch (erro) {
        console.log(erro)
    }
}

//DELETE
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({mensagem: 'mulher deletada com sucesso!'})
    }
    catch (erro) {
        console.log(erro)
    }
}


app.use(router.get('/mulheres', mostraMulheres)) //configuração da rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) //configuração da rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //configuração da rota PATCH /mulheres
app.use(router.delete('/mulheres/:id', deletaMulher)) //configuração da rota DELETE /mulheres


//PORTA
function mostraPorta() {
    console.log('servidor criado na porta ', porta)
}
app.listen(porta, mostraPorta) // servidor ouvindo a porta