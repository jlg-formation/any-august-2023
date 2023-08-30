describe("Gestion Stock", () => {
  it("home page", () => {
    cy.visit("https://jlg-formation.github.io/cypress-gestion-stock/");

    cy.contains("Gestion Stock");
    cy.contains("Gérer efficacement votre stock");
    cy.contains("footer", "Mentions Légales", {
      timeout: 1000,
    });

    cy.get("a.button.primary");
  });

  it.only("should add an article", () => {
    cy.visit("https://jlg-formation.github.io/cypress-gestion-stock/");

    cy.contains("a.button.primary", "Voir le stock").click();

    cy.url().should(
      "eq",
      "https://jlg-formation.github.io/cypress-gestion-stock/stock"
    );

    cy.get("a.button[title='Ajouter']").click();

    cy.url().should(
      "eq",
      "https://jlg-formation.github.io/cypress-gestion-stock/stock/add"
    );

    const uuid = () => Cypress._.random(0, 1e6);
    const id = uuid();
    const testname = `o-${id}`;

    cy.get("input").eq(0).clear().type(testname);
    cy.get("input").eq(1).clear().type("12.34");

    cy.get("input[type=range]").invoke("val", 34).trigger("change");

    cy.contains("div.radio label", "Occasion").click();

    cy.get("select").select("Alimentation");

    cy.contains("div.radio span", "Périssable").click();

    cy.get("input[type='date']").type("2023-09-30");

    cy.contains("button", "Ajouter").click();

    cy.contains("table tbody tr td", testname).click();

    cy.get("button[title='Supprimer']").click();

    cy.contains("table tbody tr td", testname).should("not.exist");
  });
});
