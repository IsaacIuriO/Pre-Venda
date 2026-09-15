// Entidades e Regras de Negócio
class Interessados
{
    #id
    #username
    #email
    #telephone
    #quantity
    #notifications

    constructor(username, email, telephone, quantity, notifications)
    {
        this.#username = username
        this.#email = email
        this.#telephone = telephone
        this.#quantity = quantity
        this.#notifications = notifications
        this.#validarEmail(email)
        this.#validarTelephone(telephone)
    }

    get id(){ return this.#id }
    get username(){ return this.#username }
    get email(){ return this.#email }
    get telephone(){ return this.#telephone }
    get quantity(){ return this.#quantity }
    get notifications(){ return this.#notifications }

    set id(valor) { this.#id = valor } // Alteração para verificação "se número, valide"
    set email(valor){ this.#email = valor }
    set telephone(valor){ this.#telephone = valor }

    // Lógica de validação de email (RegExr)
    #validarEmail(email)
    {
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        // Se o email não estiver no padrão, lança um erro
        if(!pattern.test(email))
        {
            throw new Error("Email está fora do padrão")
        }
    }

    #validarTelephone(telephone)
    {
        const pattern = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/

        // Se o telefone não estiver no padrão, lança um erro
        if(!pattern.test(telephone))
        {
            throw new Error("Telefone está fora do padrão")
        }
    }
    
}

module.exports = Interessados
