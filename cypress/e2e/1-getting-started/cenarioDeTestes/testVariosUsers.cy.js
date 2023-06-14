describe("massa de dados agora Brasil", () => {
  beforeEach(() => {
    cy.visit("https://www.agorabrasil.org.br");
  });

  it.only('"clicar botao cadastre-se" -force: true', () => {
    cy.contains("Cadastre-se").should("be.visible");
    cy.contains("a", "Cadastre-se").click({ force: true });

    cy.contains("select", "Candidato").should("be.visible");
    cy.contains("option", "Selecione", "Candidato").click({ force: true });
    cy.get("select option")
      .its("length", { log: false })
      .then((n) => {
        const randomOptionIndex = Cypress._.random(2, n - 2);
        cy.get("select").select(randomOptionIndex);
      });
    // crianda massa de dados
    const usuarios = require("../../fixtures/usuarios.json");
    usuarios.forEach((Email) => {
      it(`registra novo usuários ${Email.Password}`, () => {
        cy.contains("a", "Cadastre-se").click();
        cy.contains("button", "Cadastre-se").click();
        cy.get('input[data-val-email="email"]').type(Email.Password);
        cy.get('input[data-val-length="password"]').type(Password.password);
        cy.get('input[data-val-equalto="password"]').type(Password.password);
        cy.get("#AcceptTerms").click({ force: true });
        cy.contains("button", "Cadastrar").click();
      });
    });
  });
});
