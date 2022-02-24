// Importação de Dependências Externas (Pacotes NPM);

import { JSONSchemaType } from "ajv";

// Declaração da Interface do Endereço

interface IAddress {
    id: number,
    id_cliente: number,
    logradouro: string,
    numero: number,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: number,
    readonly latitude: number,
    readonly longitude: number,
}

// Declaração da Schema do Endereço

const addressCreateSchema: JSONSchemaType<IAddress> = {
    type: "object",
    properties: {
        id: {type: "number"},
        id_cliente: {type: "number"},
        logradouro: {type: "string"},
        numero: {type: "number"},
        complemento: {type: "string"},
        bairro: {type: "string"},
        cidade: {type: "string"},
        estado: {type: "string"},
        cep: {type: "number"},
        latitude: {type: "number"},
        longitude: {type: "number"},
    },
    required: ["id_cliente","logradouro","numero","bairro","cidade","estado","cep"],
    additionalProperties: false
}

// Declaração da Schema do Endereço

const addressEditSchema: JSONSchemaType<IAddress> = {
    type: "object",
    properties: {
        id: {type: "number"},
        id_cliente: {type: "number"},
        logradouro: {type: "string"},
        numero: {type: "number"},
        complemento: {type: "string"},
        bairro: {type: "string"},
        cidade: {type: "string"},
        estado: {type: "string"},
        cep: {type: "number"},
        latitude: {type: "number"},
        longitude: {type: "number"},
    },
    required: ["id","id_cliente","logradouro","numero","bairro","cidade","estado","cep"],
    additionalProperties: false
}

export {addressCreateSchema, addressEditSchema};