// Importação de Dependências Externas (Pacotes NPM);

import mysql from 'mysql2';
import {env} from 'process';
import safe = require('dotenv-safe');

// Chamada das Variáveis de Ambiente

safe.config();

// Classe responsável por instanciar a conexão com o Banco de Dados;

export default class DBConnection {

    public conn!: mysql.Pool;

    constructor(){
        this.setDBConnection();
        this.conn;
    }

    //Conexão com o Bando de Dados.

    private setDBConnection() {
        this.conn = mysql.createPool({
            host: env.HOST,
            port: Number(env.PORT),
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }

    public query(query: string, data?: Array<object>) {
        return this.conn.promise().query(query, data);
    }
}