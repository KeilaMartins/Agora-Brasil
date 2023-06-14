describe("Login e registro de usuarios ", () => {
  beforeEach(() => {
    cy.visit("https://www.agorabrasil.org.br");
  });

  it.only('"clicar botao Contato" -force: true', () => {
    cy.contains("Contato").should("be.visible");
    cy.contains("a", "Contato").click({ force: true });

    cy.get("#FromName").type("Maximus maximo");
    cy.get("#Company").type("casa da sogra");
    cy.get("#From").type("maximus@gmail.com");
    cy.get("#Phone").type("9999999999");
    cy.get("#Message").type("testando mensagens");
    cy.get(".offset-md-3 > .btn").click;
  });
});
