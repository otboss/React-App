const config = require("../../cypress.json");
context('Cart', () => {
  beforeEach(() => {
    cy.visit(config.baseURL);
  });

  it('should add item to cart', () => {
    cy.get(".list-item").eq(0)["click"]();
    cy.get(".add-button").eq(0)["click"]();
    cy.get("ion-back-button").eq(0)["click"]();
    cy.get("ion-icon.cart-icon").eq(0)["click"]();
    cy.get(".product-details-row").should('have.length', 1);
  });
})
