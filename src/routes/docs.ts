// Importação de Dependências Externas (Pacotes NPM);

import * as express from 'express';
import swaggerUi from 'swagger-ui-express';

const options = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "TeamSoft API",
  };

//Importação de Dependências Internas

import docs from "../docs.json";

export default class DocsRoute {

    public router = express.Router();

    constructor () {
        this.setupRoutes();
    }

    public setupRoutes(){
        this.router.get('/docs', swaggerUi.setup(docs, options));
    }
}