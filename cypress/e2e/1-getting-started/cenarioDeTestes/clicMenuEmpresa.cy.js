describe("Clicando botao empresas no menu", () => {
  beforeEach(() => {
    cy.visit("https://www.agorabrasil.org.br");
  });

  it.only('"clicar botao Empresas do menu" -force: true', () => {
    cy.contains("Empresas").should("be.visible");
    cy.contains("a", "Empresas").click({ force: true });
    cy.contains("cadastre sua vaga").should("be.visible");
    cy.contains("a", "cadastre sua vaga").click({ force: true });

    cy.get("#Email").type("Marcos@gmail.com");

    cy.get("#Password").type("marcos123");
    cy.get(".btn").click();
    //cadastrando dados pessoais
  });
});
