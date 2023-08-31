import { url } from "../fixtures/url";

describe("Gestion Stock", () => {
  it("home page", () => {
    cy.visit(url);

    cy.contains("Gestion Stock");
    cy.contains("Gérer efficacement votre stock");
    cy.contains("footer", "Mentions Légales", {
      timeout: 1000,
    });

    cy.get("a.button.primary");
  });
});
