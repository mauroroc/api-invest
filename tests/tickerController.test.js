const TickerController = require("../apis/Ticker/controllers/TickerController")
const expect = require("chai").expect;

describe("Exemplo de Teste", () => {
    it("primeiro teste", () => {
        expect(TickerController.testExemplo()).to.equal("Teste")
    })
})