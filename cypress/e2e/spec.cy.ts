import { a1, articles } from "../fixtures/articles.fixture";
import { url } from "../fixtures/url";

import { createArticle } from "../utils/createArticle";

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

  it.only("should add an article", () => {
    cy.visit(url);

    cy.intercept({ method: "GET", url: "/api/articles" }, articles).as(
      "GetArticles"
    );

    cy.contains("a.button.primary", "Voir le stock").click();
    cy.wait("@GetArticles");

    cy.url().should("eq", url + "/stock");

    cy.get("a.button[title='Ajouter']").click();

    cy.url().should("eq", url + "/stock/add");

    const uuid = () => Cypress._.random(0, 1e6);
    const id = uuid();
    const testname = `${a1.name}${id}`;

    createArticle(a1, testname);

    const afterAdditionArticles = [...articles, { ...a1, name: testname }];
    cy.intercept(
      { method: "GET", url: "/api/articles" },
      afterAdditionArticles
    ).as("GetArticles2");

    cy.intercept({ method: "POST", url: "/api/articles" }, "");
    cy.contains("button", "Ajouter").click();
    cy.wait("@GetArticles2");

    cy.contains("table tbody tr td", testname).click();

    cy.intercept({ method: "GET", url: "/api/articles" }, articles).as(
      "GetArticles3"
    );
    cy.intercept({ method: "DELETE", url: "/api/articles" }, "");
    cy.get("button[title='Supprimer']").click();
    cy.wait("@GetArticles3");

    cy.contains("table tbody tr td", testname).should("not.exist");
  });

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
