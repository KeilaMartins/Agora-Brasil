describe("Login e registro de usuarios no agora Brasil", () => {
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
    cy.get(
      'input[data-val-email="The Email field is not a valid e-mail address."]'
    ).type("maximonstro@gamil.com");
    cy.get(
      'input[data-val-length="O Senha deve ter pelo menos 6 e no máximo 100 caracteres."]'
    ).type("Maxi20900 Martins");
    cy.get(
      'input[data-val-equalto="A senha e a senha de confirmação não correspondem."]'
    ).type("Maxi20900 Martins");

    cy.get("#AcceptTerms").click({ force: true });
    cy.contains("button", "Cadastrar").click();
  });
});
