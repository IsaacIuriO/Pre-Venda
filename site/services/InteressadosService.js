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

    async listarInteressados()
    {
        const interessados = []
        const dados = await this.#interessadosSchema.findAll();

        for(const interessado of dados)
        {
            const i = new Interessados(
                interessado.username,
                interessado.email,
                interessado.telephone,
                interessado.quantity,
                interessado.notifications
            )

            i.id = interessado.id
            interessados.push(i)
        }

        return interessados
    }

        async deletarInteressado(id)
    {
        const interessado = await this.#interessadosSchema.findOne
        ({
            where:{ id: id }
        });

        const affectedRows = await interessado.destroy()
        return affectedRows;
    }
}

// exporta para outros arquivos
module.exports = InteressadosService;
