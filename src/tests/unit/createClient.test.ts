import { request, response } from "express";
import ClientService from "../../services/cliente.service"

describe("Criação de Cliente", () => {

    it("Deve ser possível criar um usuário", async () => {

        const clientService = new ClientService();

        const client = await clientService.insertRow(request, response)

        expect(client).toHaveProperty("id");

    })
})