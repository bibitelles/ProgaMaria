const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
dotenv.config()

async function conectaBancodeDados() {
    try {
        console.log('Conectando ao banco de dados...')
        console.log(process.env.MONGO_URL)

        await mongoose.connect(process.env.MONGO_URL)
    
        console.log('Banco de dados conectado!')
    }
    catch(erro) {
        console.log(erro)
    }

}	

module.exports = conectaBancodeDados