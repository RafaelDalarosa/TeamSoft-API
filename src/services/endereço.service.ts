// Importação de Dependências Externas (Pacotes NPM);

import { Request, Response } from "express";

//Importação de Dependências Internas

import methods from "../methods/endereço";

export default class ClientService {

    public getAll = async (req: Request, res: Response) => {
        try{
            const [result] = await methods.getAll();

            return res.status(200).json(result);
        } catch(e) {
            console.log(e);
            return res.status(400).json({msg: "Ouve um erro com o a conexão com o banco de dados, tente de novo mais tarde!"});
        }
    }

    public getId = async (req: Request, res: Response) => {
        try{
            const id_cliente = req.params.id;

            const [result] = await methods.getId(id_cliente);

            return res.status(200).json(result);
        } catch(e) {
            console.log(e);
            return res.status(400).json({msg: "Ouve um erro com o a conexão com o banco de dados, tente de novo mais tarde!"});
        }

    }

    public getIdClient = async (req: Request, res: Response) => {
        try{
            const id_cliente = req.params.id;

            const [result] = await methods.getIdClient(id_cliente);

            return res.status(200).json(result);
        } catch(e) {
            console.log(e);
            return res.status(400).json({msg: "Ouve um erro com o a conexão com o banco de dados, tente de novo mais tarde!"});
        }

    }

    public insertRow = async (req: Request, res: Response) => {
        try {
            const id_cliente = req.body.id_cliente
            const logradouro = req.body.logradouro
            const numero = req.body.numero
            const complemento = req.body.complemento
            const bairro = req.body.bairro
            const cidade = req.body.cidade
            const estado = req.body.estado
            const cep = req.body.cep
            const latitude = req.body.latitude
            const longitude = req.body.longitude
            
            await methods.insertRow({id_cliente,logradouro,numero,complemento,bairro,cidade,estado,cep,latitude,longitude});

            return res.status(200).json({msg: 'Endereço Cadastrado com sucesso!'});
        } catch(e){
            console.log(e);
            return res.status(400).json({msg: "Ouve um erro com o a conexão com o banco de dados, tente de novo mais tarde!"});
        }
    }

    public editRow = async (req: Request, res: Response) => {
        try {
            const id = req.body.id
            const id_cliente = req.body.id_cliente
            const logradouro = req.body.logradouro
            const numero = req.body.numero
            const complemento = req.body.complemento
            const bairro = req.body.bairro
            const cidade = req.body.cidade
            const estado = req.body.estado
            const cep = req.body.cep
            const latitude = req.body.latitude
            const longitude = req.body.longitude

            await methods.editRow({id_cliente,logradouro,numero,complemento,bairro,cidade,estado,cep,latitude,longitude}, id);

            return res.status(200).json({msg: 'Endereço editado com sucesso!'});
        } catch(e){
            console.log(e);
            return res.status(400).json({msg: "Ouve um erro com o a conexão com o banco de dados, tente de novo mais tarde!"});
        }
    }

    public deleteRow = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            await methods.deleteRow(id);

            return res.status(200).json({msg: 'Endereço deletado com sucesso!'});
        } catch(e){
            console.log(e);
            return res.status(400).json({msg: "Ouve um erro com o a conexão com o banco de dados, tente de novo mais tarde!"});
        }
    }
    
}