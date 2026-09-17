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

    async interessadosListar(req, res)
    {
        const interessados = await this.interessadosService.listarInteressados();
        res.render('Interessados/lista', { interessados: interessados });
    }

    async interessadoDeletar(req, res)
    {
        const affectedRows = await this.interessadosService.deletarInteressado(req.params.id)
        res.json({ affectedRows: affectedRows })
    }

}

module.exports = new InteressadosController();
