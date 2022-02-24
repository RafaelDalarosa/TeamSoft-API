// Importação de Dependências Externas (Pacotes NPM);

import * as express from 'express';

//Importação de Dependências Internas

import ClientService from '../services/cliente.service';
import {clientCreateSchema,clientEditSchema} from '../interfaces/cliente.interfaces';
import validation from '../middlewares/validator.middleware';

export default class ClientRoute{

    public router = express.Router();
    private clientService = new ClientService;

    constructor () {
        this.setupRoutes();
        this.clientService;
    }

    public setupRoutes(){
        this.router.get('/cliente', this.clientService.getAll);
        this.router.get('/cliente/:id', this.clientService.getId);
        this.router.post('/cliente', validation(clientCreateSchema), this.clientService.insertRow);
        this.router.put('/cliente', validation(clientEditSchema), this.clientService.editRow);
        this.router.delete('/cliente/:id', this.clientService.deleteRow);
    }
}