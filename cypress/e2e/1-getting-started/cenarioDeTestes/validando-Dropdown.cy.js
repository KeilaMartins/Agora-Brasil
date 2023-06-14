describe("Login e registro de usuarios no agora Brasil", () => {
  beforeEach(() => {
    cy.visit("https://www.agorabrasil.org.br");
  });
  //selecinando Dropdown
  it.only("select option from a select input-login", () => {
    cy.get("select option")
      .its("length", { log: false })
      .then((n) => {
        const randomOptionIndex = Cypress._.random(10, n - 10);
        cy.get("select").select(randomOptionIndex);
      });
  });
});
