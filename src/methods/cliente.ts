// Importação de Dependências Internas;

import DBConnection from '../config/db';

// Instancia da Classe que faz conexão com o Banco de Dados;

const conn = new DBConnection();

// Metodos utilizados para o retorno das queries;

const getAll = ()  => {
    return conn.query('SELECT * FROM cliente');
}

const getId = (id: string) => {
    return conn.query(`SELECT * FROM cliente WHERE id_cliente = ${id}`);
}

const insertRow = (data: object) => {
    return conn.query(`INSERT INTO cliente SET ? `, [data]);
}

const editRow = (data: object,id: string) => {
    return conn.query(`UPDATE cliente SET ? WHERE id_cliente = ${id}`, [data]);
}

const deleteRow = (id: string) => {
    return conn.query(`DELETE FROM cliente WHERE id_cliente = ${id}`);
}

export default {getAll, getId, insertRow, editRow, deleteRow};
