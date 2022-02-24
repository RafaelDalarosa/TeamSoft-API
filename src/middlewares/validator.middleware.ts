// Importação de Dependências Externas (Pacotes NPM);

import Ajv, { JSONSchemaType } from "ajv";
import addFormats from "ajv-formats";
import { NextFunction, Request, Response } from "express";

// Chamada para instanciar a Classe Ajv passando os parametros necessários para incializar o mesmo.

const avjInstance = new Ajv({allErrors: true});
addFormats(avjInstance);

// Declaração da Função para a validação da informação implementando a interface do objeto recebido.

function validate<T>(schema: JSONSchemaType<T>){

        return (req: Request, res: Response, next: NextFunction) => {
        
        const validateSchema = avjInstance.compile(schema);
        const valid = validateSchema(req.body);

        if (!valid) {
            const errors = validateSchema.errors;
            return res.status(400).json(errors);
        }

        next();
    }
    
}   

export default validate;