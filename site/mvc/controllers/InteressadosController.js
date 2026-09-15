const InteressadosService = require('../../services/InteressadosService');

class InteressadosController
{
    constructor()
    {
        this.interessadosService = new InteressadosService();
    }

    index(req, res)
    {
        res.render('Interessados/index');
    }

    interessadosCriar(req, res)
    {
        res.render('Interessados/formulario');
    }

    async interessadosPostAsync(req, res)
    {
        const id = await this.interessadosService.cadastrarInteressados(
            req.body.username,
            req.body.email,
            req.body.telephone,
            req.body.quantity,
            req.body.notifications
        )

        res.json({ id: id })
    }

}

module.exports = new InteressadosController();
