const Interessados = require('../mvc/models/InteressadosModel');
const InteressadosSchema = require('../schemas/InteressadosSchema');

class InteressadosService
{
    #interessadosSchema

    constructor()
    {
        this.#interessadosSchema = InteressadosSchema;
    }

    async cadastrarInteressados(username, email, telephone, quantity, notifications)
    {
        const interessados = new Interessados(username, email, telephone, quantity, notifications);

        const id = await this.#interessadosSchema.create(
            {
                username: interessados.username,
                email: interessados.email,
                telephone: interessados.telephone,
                quantity: interessados.quantity,
                notifications: interessados.notifications
            }
        )

        return id;
    }

    async buscarTodosInteressados()
    {
        const interessados = []
        const dados = await this.#interessadosSchema.findAll();

        for(const interessados of dados)
        {
            const i = new Interessados(
                interessados.username,
                interessados.email,
                interessados.telephone,
                interessados.quantity,
                interessados.notifications
            )

            u.id = interessados.id
            interessados.push(u)
        }

        return interessados
    }
}

// exporta para outros arquivos
module.exports = InteressadosService;
