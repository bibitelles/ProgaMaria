const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Diana Ross Telles Bittencourt',
        imagem: 'https://i.scdn.co/image/ab67616d0000b273d9cd13b2d78be62fc76cb111',
        minibio: 'Comilona'
    })
}


function mostraPorta() {
    console.log('servidor criado na porta ', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)