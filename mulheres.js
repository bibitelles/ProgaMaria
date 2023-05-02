const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333
const mulheres = [
    {
        nome: 'Chacka Khan',
        imagem: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg',
        minibio: 'Chacka Khan é uma mulher de 19 anos, com o nome de Chacka, que foi a primeira mulher do Brasil, e que gosta de jogar futebol e ser uma das melhores mulheres do mundo.'
    },
    {
        nome: 'Diana Ross Telles Bittencourt',
        imagem: 'https://i.scdn.co/image/ab67616d0000b273d9cd13b2d78be62fc76cb111',
        minibio: 'Comilona'
    }, 
    {
        nome: 'Amanda',
        imagem: 'https://i.scdn.co/image/ab67616d0000b2731b9a8a5e7c7b5e8d8f6b7e5d',
        minibio: 'Chata'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log('servidor criado na porta ', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)