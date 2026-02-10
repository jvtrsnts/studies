/// <reference types='cypress'/>

describe("Casos de teste", () => {
    beforeEach("Acesso ao site", () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    })
    it("Entrada", () => {
        CriarTransação("DBA", 200)
        cy.get("tbody tr td.description")
        .should("have.text", "DBA")
    })

    it("Saida", () => {
        CriarTransação("Viagem", -520)
        cy.get("tbody tr td.description")
        .should("have.text", "Viagem")
    })

    it("Exclusão", () => {
        CriarTransação("Exclusão", 25)
        // cy.contains(".description", "Exclusão")
        // .parent()
        // .find("img").click()

        cy.contains(".description", "Exclusão")
        .siblings()
        .children('img').click()

        cy.get("tbody tr")
        .should("have.length", 0)
    })
})

function CriarTransação(descricao, valor) {
    cy.get("section a").contains("Nova Transação").click()
    cy.get("#description").type(descricao)
    cy.get("#amount").type(valor)
    cy.get("#date").type("2001-07-28")
    cy.contains("button", "Salvar").click()
}