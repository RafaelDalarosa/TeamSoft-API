// Importação de Dependências Externas (Pacotes NPM);

import express, { Application } from 'express';
import http from 'http';
import https from 'https';

// Classe responsável por instanciar servidores HTTP e HTTPS com certificado SSL,
// necessário passar o certificado, portas, middlewares e rotas como parametro.

export default class Server {
    public app: Application;
    public httpPort?: string;
    public httpsPort?: string;
    public ip: string;
    public key?: Buffer;
    public cert?: Buffer;

    constructor(appConfig: {ip: string, key?: Buffer, cert?: Buffer, httpPort?: string, httpsPort?: string, middlewares: Array<any>, routes: Array<any>}){    
        this.app = express();
        this.ip = appConfig.ip;
        this.key = appConfig.key;
        this.cert = appConfig.cert;
        this.httpPort = appConfig.httpPort;
        this.httpsPort = appConfig.httpsPort;
        this.setMiddlewares(appConfig.middlewares)
        this.setRoutes(appConfig.routes)
    }

    // Metodo que sobe o servidor HTTP do Node.

    public httpServer() {

        http.createServer(this.app).listen(this.httpPort, () => {
            console.log(`Server is running in http://${this.ip}:${this.httpPort}`);
        });
    }

    // Metodo que sobe o servidor HTTPS com certificado SSL do Node.

    public httpsServer() {
        const options = {cert: this.cert, key: this.key};
        if ( this.cert == undefined || this.key == undefined){
            console.log("HTTPS Server is not ready because no valid certificate is loaded!")
        } else {
            https.createServer(options, this.app).listen(this.httpsPort, () => {
            console.log(`Server is running in https://${this.ip}:${this.httpsPort}`);
            });
        }
    }

    // Metodo que verifica e utiliza Middlewares nos servidores do Node.

    private setMiddlewares(middlewares: {forEach: (mid: (middlewares: any)=> void) => void;}) {
        if (middlewares != null || undefined){
            middlewares.forEach(middleware => {
                this.app.use(middleware)
            });
        }
        if (middlewares == null || undefined){
            console.log("No Middlewares loaded!")
        }
    }

    // Metodo que verifica e utiliza Rotas nos servidores do Node.

    private setRoutes(routes: {forEach: (routes: (routes: any)=> void) => void;}) {
        if (routes != null || undefined){
            routes.forEach(route => {
                this.app.use('/', route.router)
            });
        }
        if (routes == null || undefined){
            console.log("No Routes loaded!")
        }
    }
}