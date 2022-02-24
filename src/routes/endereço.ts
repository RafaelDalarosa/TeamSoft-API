// Importação de Dependências Externas (Pacotes NPM);

import * as express from 'express';

//Importação de Dependências Internas

import AddressService from '../services/endereço.service';
import { addressCreateSchema, addressEditSchema } from '../interfaces/endereco.interface';
import validation from '../middlewares/validator.middleware';
import getGeoLocation from '../middlewares/geolocation.middleware';

export default class AddressRoute {

    public router = express.Router();
    private addressService = new AddressService;

    constructor () {
        this.setupRoutes();
        this.addressService;
    }

    public setupRoutes(){
        this.router.get('/endereco', this.addressService.getAll);
        this.router.get('/endereco/:id', this.addressService.getId);
        this.router.get('/endereco/porCliente/:id', this.addressService.getIdClient);
        this.router.post('/endereco', getGeoLocation(), validation(addressCreateSchema), this.addressService.insertRow);
        this.router.put('/endereco', getGeoLocation(), validation(addressEditSchema), this.addressService.editRow);
        this.router.delete('/endereco/:id', this.addressService.deleteRow);
    }
}