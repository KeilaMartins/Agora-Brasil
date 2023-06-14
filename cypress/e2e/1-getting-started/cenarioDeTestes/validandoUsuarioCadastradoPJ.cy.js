describe("Cadastando usuario e validando compos obrigatóios", () => {
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
    ).type("robloxcop@gamil.com");
    cy.get(
      'input[data-val-length="O Senha deve ter pelo menos 6 e no máximo 100 caracteres."]'
    ).type("Max11100 Martins");
    cy.get(
      'input[data-val-equalto="A senha e a senha de confirmação não correspondem."]'
    ).type("Max11100 Martins");

    cy.get("#AcceptTerms").click({ force: true });
    cy.contains("button", "Cadastrar").click();
    //cadastrando dados pessoais
    cy.get("#Name").type("Maximus maximo");

    cy.get("#TradingName").type("Maximus maximo");

    cy.get("#Activity").type("informatica");

    cy.get("#CNPJ").type("94.002.709/0001-70");

    cy.get("#ResponsibleCompany").type("Morbios maximus");

    cy.get("#Email").type("Maximus@torta.com");

    cy.get("#Phone").type("9999999999");

    cy.get("#Address_PostalCode").type("06321-060");

    cy.get("#Address_Street").type("torta mole");

    cy.get("#Address_Number").type("900");

    cy.get("#Address_Neighborhood").type("bairro são nunca");

    cy.get("#Address_City").type("Sem nome");

    cy.get("#Address_State").type("são paulo");

    cy.get("#Address_Complement").type("bairro logo ali");

    cy.get("#HasEmployabilityProgram").check();
  });
});
