import { a1, articles } from "../fixtures/articles.fixture";
import { url } from "../fixtures/url";

import { createArticle } from "../utils/createArticle";

describe("Gestion Stock", () => {
  it("should add an article with limitDate", () => {
    cy.visit(url);

    cy.contains("a.button.primary", "Voir le stock").click();

    cy.url().should("eq", url + "/stock");

    cy.get("a.button[title='Ajouter']").click();

    cy.url().should("eq", url + "/stock/add");

    const uuid = () => Cypress._.random(0, 1e6);
    const id = uuid();
    const testname = `${a1.name}${id}`;

    createArticle(a1, testname);
    cy.contains("button", "Ajouter").click();

    cy.contains("table tbody tr td", testname).click();

    cy.get("button[title='Supprimer']").click();

    cy.contains("table tbody tr td", testname).should("not.exist");
  });
});
