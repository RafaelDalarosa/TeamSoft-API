// Importação de Dependências Externas (Pacotes NPM);

import { JSONSchemaType } from "ajv";

// Declaração da Interface do Cliente

interface IClient {
    id: number
    cnpj: string,
    razao_social: string,
    nome_do_contato: string,
    telefone: string
}

// Declaração da Schema do Cliente

const clientCreateSchema: JSONSchemaType<IClient> = {
    type: "object",
    properties: {
        id: {type: "number"},
        cnpj: {type: "string"},
        razao_social: {type: "string"},
        nome_do_contato: {type: "string"},
        telefone: {type: "string"},
    },
    required: ["cnpj", "razao_social", "nome_do_contato", "telefone"],
    additionalProperties: false
}

// Declaração da Schema do Cliente

const clientEditSchema: JSONSchemaType<IClient> = {
    type: "object",
    properties: {
        id: {type: "number"},
        cnpj: {type: "string"},
        razao_social: {type: "string"},
        nome_do_contato: {type: "string"},
        telefone: {type: "string"},
    },
    required: ["id","cnpj", "razao_social", "nome_do_contato", "telefone"],
    additionalProperties: false
}

export {clientCreateSchema, clientEditSchema};