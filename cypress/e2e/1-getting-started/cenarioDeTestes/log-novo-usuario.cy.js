describe("Login novo usuarios ", () => {
  beforeEach(() => {
    cy.visit("https://www.agorabrasil.org.br");
  });

  it.only('"clicar botao Entrar" -force: true', () => {
    cy.contains("Entrar").should("be.visible");
    cy.contains("a", "Entrar").click({ force: true });

    cy.get("#Email").type("maximestre@gamil.com");

    cy.get("#Password").type("Maxi20900 Martins");

    cy.get(".btn").click();
  });
});
