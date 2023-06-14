describe("Clicando botao menu candidatos e veja mais", () => {
  beforeEach(() => {
    cy.visit("https://www.agorabrasil.org.br");
  });

  it.only('"clicar botao candidatos e veja mais" -force: true', () => {
    cy.contains("Candidatos").should("be.visible");
    cy.contains("a", "Candidatos").click({ force: true });
    cy.contains("Veja mais").should("be.visible");
    cy.contains("a", "Veja mais").click({ force: true });
  });
});
