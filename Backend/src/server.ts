import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import carsRoutes from './routes/carsRoute'


dotenv.config();

const server = express()

//configurações necessária
server.use(cors());
server.use(express.json());


//rotas do aplicação
server.use(carsRoutes)


//porta em que o servidor vai rodar
module.exports = server.listen(process.env.SERVER_PORT, () =>{
    console.log(`App executando na porta ${process.env.SERVER_PORT}!`);
});


