import knex from 'knex';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

//CONEXAO COM O BANCO DE DADOS SQLITE, ASPENAS PARA TESTE
export const connectionTest = knex ({
    client: 'sqlite3',
    connection:{
        filename: path.resolve(__dirname, 'database.sqlite'),
    },

    useNullAsDefault: true,
});


//CONEXAO COM O BANCO DE DADOS POSTGRES
export const connection = knex ({
    client: 'pg',
    version: '8.7.3',
    connection:{
        host : process.env.PG_HOST,
        port : parseInt(process.env.PG_PORT as string),
        user: process.env.PG_USER,
        password : process.env.PG_PASSWORD,
        database : process.env.PG_DB,
    },
    useNullAsDefault: true,
});



export default connection;







