// Importação de Dependências Externas (Pacotes NPM);

import ip from "ip";
import fs from 'fs';
import {env, cwd} from 'process';
import safe = require('dotenv-safe');
import express = require("express");
import swaggerUi from "swagger-ui-express";

//Importação de Dependências Internas

import Server from "./config/server";

// Importação de Middlewares

import cors from 'cors';

// Importação das Rotas

import ClientRoute from "./routes/cliente";
import AddressRoute from "./routes/endereço";
import DocsRoute from "./routes/docs";

// Chamada das Variáveis de Ambiente

safe.config();

// Leitura dos Certificados SSL

let cert: Buffer | undefined = undefined;
let key: Buffer | undefined = undefined;

try {
    key = fs.readFileSync(cwd() + '/src/config/key.pem')
} catch(e) {
    console.log("Não foi Possivel fazer a leitura da chave 'key.pem' do certificado SSL")
}


try {
    cert = fs.readFileSync(cwd() + '/src/config/cert.pem')
} catch(e) {
    console.log("Não foi Possivel fazer a leitura do certificado 'cert.pem' SSL")
}


// Chamada para instanciar a Classe Server passando os parametros necessários para incializar o mesmo.

const server = new Server({
    httpPort: env.HTTP,
    httpsPort: env.HTTPS,
    ip: ip.address(),
    key: key,
    cert: cert,
    middlewares: [
        express.json(),
        cors(),
        swaggerUi.serve,
    ],
    routes: [
        new ClientRoute(),
        new AddressRoute(),
        new DocsRoute()
    ]
})

// Chamada dos metodos da Classe para subir os servidores.

server.httpServer();
server.httpsServer();