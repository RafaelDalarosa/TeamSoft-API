// Importação de Dependências Externas (Pacotes NPM);

import axios from "axios";
import {env} from 'process';
import safe = require('dotenv-safe');
import { NextFunction, Request, Response } from "express";

// Chamada das Variáveis de Ambiente

safe.config();

// Declaração de Função para a Obtenção de Latitude e Longitude

function getGeoLocation() {

        return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const geoLocation = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.numero}+${req.body.logradouro}+${req.body.cidade}+${req.body.estado}&key=${env.KEY}`);
            req.body.latitude = geoLocation.data["results"][0]['geometry']['location']['lat'];
            req.body.longitude = geoLocation.data["results"][0]['geometry']['location']['lng'];
        }catch (e) {
            console.log(e)
            return res.status(400).json({msg: "Não Foi Possivel receber a Longitude e Latitude do endereço informado, tente mais tarde!"})
        }

        next();
    }

}

export default getGeoLocation;
