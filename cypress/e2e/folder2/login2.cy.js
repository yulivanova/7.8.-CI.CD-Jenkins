const user = require("C:/IdeaProjects/CYPRESS 2/cypress 1/cypress/fixtures/user.json");
const selector = require("C:/IdeaProjects/CYPRESS 2/cypress 1/cypress/fixtures/selectors.json");

describe('admin login verification', () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/admin");
  });

  it('admin login verification valid', () => {
    cy.login(user.email, user.password);
    cy.contains(selector.deskForEqual).should("be.visible");
  });
});