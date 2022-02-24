// Importação de Dependências Externas (Pacotes NPM);

import { Request, Response } from "express";

//Importação de Dependências Internas

import methods from "../methods/cliente";

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

    public insertRow = async (req: Request, res: Response) => {
        try {
            const cnpj = req.body.cnpj
            const razao_social = req.body.razao_social
            const nome_do_contato = req.body.nome_do_contato
            const telefone = req.body.telefone
            await methods.insertRow({cnpj,razao_social,nome_do_contato,telefone});

            return res.status(200).json({msg: 'Usuario Cadastrado com sucesso!'});
        } catch(e){
            console.log(e);
            return res.status(400).json({msg: "Ouve um erro com o a conexão com o banco de dados, tente de novo mais tarde!"});
        }
    }

    public editRow = async (req: Request, res: Response) => {
        try {
            const id = req.body.id
            const cnpj = req.body.cnpj
            const razao_social = req.body.razao_social
            const nome_do_contato = req.body.nome_do_contato
            const telefone = req.body.telefone
            await methods.editRow({cnpj,razao_social,nome_do_contato,telefone}, id);

            return res.status(200).json({msg: 'Usuario editado com sucesso!'});
        } catch(e){
            console.log(e);
            return res.status(400).json({msg: "Ouve um erro com o a conexão com o banco de dados, tente de novo mais tarde!"});
        }
    }

    public deleteRow = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            await methods.deleteRow(id);

            return res.status(200).json({msg: 'Usuario deletado com sucesso!'});
        } catch(e){
            console.log(e);
            return res.status(400).json({msg: "Ouve um erro com o a conexão com o banco de dados, tente de novo mais tarde!"});
        }
    }
    
}