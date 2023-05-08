const mongoose = require('mongoose');
require('dotenv').config();

async function conectaBancodeDados() {
    try {
        console.log('Conectando ao banco de dados...')

        await mongoose.connect(process.env.MONGO_URL)
    
        console.log('Banco de dados conectado!')
    }
    catch(erro) {
        console.log(erro)
    }

}	

module.exports = conectaBancodeDados