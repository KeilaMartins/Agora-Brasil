describe("Cadastando usuario e dados pessoais", () => {
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
    ).type("maxfuscao@gamil.com");
    cy.get(
      'input[data-val-length="O Senha deve ter pelo menos 6 e no máximo 100 caracteres."]'
    ).type("Max11100 Martins");
    cy.get(
      'input[data-val-equalto="A senha e a senha de confirmação não correspondem."]'
    ).type("Max11100 Martins");

    cy.get("#AcceptTerms").click({ force: true });
    cy.contains("button", "Cadastrar").click();
    //cadastrando dados pessoais
    cy.get("#StepForm1_Name").type("Max Milliano");

    cy.get("#StepForm1_DisplayName").type("Maximus");

    cy.get("#StepForm1_CPF").type("18317813998");

    cy.get("#StepForm1_Genre").type("Maculino");

    cy.get("#StepForm1_Phone").type("1299999999");

    cy.get("#StepForm1_BirthDay").type("25101995");

    cy.get("#info-basicas > .btn").click();
  });
});
