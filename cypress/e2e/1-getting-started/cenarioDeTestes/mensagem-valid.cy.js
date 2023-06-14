describe("Login e registro de usuarios invalido", () => {
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
        const randomOptionIndex = Cypress._.random(1, n - 1);
        cy.get("select").select(randomOptionIndex);
      });
    cy.get(
      'input[data-val-email="The Email field is not a valid e-mail address."]'
    ).type("maxiselgamil.com");
    cy.contains("Cadastre-se").should("be.visible");
    cy.get(
      'input[data-val-length="O Senha deve ter pelo menos 6 e no máximo 100 caracteres."]'
    ).type("1234");

    cy.contains(
      "data-valmsg-summary",
      "A senha e a senha de confirmação não correspondem."
    ).should("be.visible");

    cy.get(
      'input[data-val-equalto="A senha e a senha de confirmação não correspondem."]'
    ).type("0");
    cy.contains(
      "data-valmsg-summary",
      "A senha e a senha de confirmação não correspondem."
    ).should("be.visible");

    cy.get("#AcceptTerms").click({ force: true });
    cy.contains("button", "Cadastrar").click();
  });
});
