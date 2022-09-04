module.exports = class CarteiraEntity {

    constructor(
        id,
        nome,
        corretora
    ) {

        this.id = id
        this.nome = nome
        this.corretora = corretora
    }


    static build(
        id,
        nome,
        corretora
    ) {
      
        return new CarteiraEntity(
            id,
            nome,
            corretora
        )

    }


}

