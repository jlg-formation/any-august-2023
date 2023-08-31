import { Article } from "../interfaces/Article";

export const createArticle = (a1: Article, testname: string) => {
  cy.get("input").eq(0).clear().type(testname);
  cy.get("input").eq(1).clear().type(`${a1.price}`);

  cy.get("input[type=range]").invoke("val", a1.qty).trigger("change");

  if (a1.isUsed) {
    cy.contains("div.radio label", "Occasion").click();
  }

  cy.get("select").select(a1.type);

  if (a1.limitDate) {
    cy.contains("div.radio span", "Périssable").click();
    cy.get("input[type='date']").type(a1.limitDate);
  }

  cy.get("input[type='file']").selectFile([
    "cypress/fixtures/images/jlg.jpg",
    "cypress/fixtures/images/jlg2.jpg",
  ]);
};
