// Importação de Dependências Internas;

import DBConnection from '../config/db';

// Instancia da Classe que faz conexão com o Banco de Dados;

const conn = new DBConnection();

// Metodos utilizados para o retorno das queries;

const getAll = ()  => {
    return conn.query('SELECT * FROM endereco');
}

const getId = (id: string) => {
    return conn.query(`SELECT * FROM endereco WHERE id_endereco = ${id}`);
}

const getIdClient = (id: string) => {
    return conn.query(`SELECT * FROM endereco WHERE id_cliente = ${id}`);
}

const insertRow = (data: object) => {
    return conn.query(`INSERT INTO endereco SET ? `, [data]);
}

const editRow = (data: object,id: string) => {
    return conn.query(`UPDATE endereco SET ? WHERE id_endereco = ${id}`, [data]);
}

const deleteRow = (id: string) => {
    return conn.query(`DELETE FROM endereco WHERE id_endereco = ${id}`);
}

export default {getAll, getId, getIdClient, insertRow, editRow, deleteRow};
