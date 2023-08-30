describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://jlg-formation.github.io/cypress-gestion-stock/");

    cy.contains("Gestion Stock");
  });
});
