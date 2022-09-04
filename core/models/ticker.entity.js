module.exports = class TickerEntity {

    constructor(
        id,
        idCarteira,
        codigo,
        valorCusto        
    ) {

        this.id = id
        this.idCarteira = idCarteira
        this.codigo = codigo
        this.valorCusto = valorCusto
    }


    static build(
        id,
        idCarteira,
        codigo,
        valorCusto
    ) {
      
        return new TickerEntity(
            id,
            idCarteira,
            codigo,
            valorCusto
        )

    }


}
