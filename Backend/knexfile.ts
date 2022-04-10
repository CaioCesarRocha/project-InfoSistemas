import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

module.exports = {
    test:{
      client: 'sqlite3', //USANDO SQLITE3 SOMENTE PARA TESTES
      connection:{
        filename: path.resolve(__dirname, 'src', 'database' ,'database.sqlite'),
      },  
      migrations:{
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
      },
      useNullAsDefault: true,
    },

    development: {
      client: 'postgresql',
      connection: {
        database: process.env.PG_DB,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        port: process.env.PG_PORT
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations:{
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
      },
    }
    
};

