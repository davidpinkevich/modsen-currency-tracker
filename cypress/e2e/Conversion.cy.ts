describe("Test modal window", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("open after click for element an close after click for cross", () => {
    cy.get('[data-testcy="currency-item"]').eq(2).click();

    cy.get('[data-testcy="modal"]').should("exist");
    cy.get("span").should("have.text", "USD");

    cy.get('img[alt="close"]').click();
    cy.get('[data-testcy="modal"]').should("not.exist");
  });

  it("input value", () => {
    cy.get('[data-testcy="currency-item"]').eq(2).click();

    cy.get("input").type("123");

    cy.get("input").should("have.value", "123");
    cy.get('[data-testcy="check-conversion"]').eq(0).click();
    cy.get('[data-testcy="check-conversion"]')
      .eq(0)
      .should("have.css", "transform", "matrix(1.1, 0, 0, 1.1, 0, 0)");
  });
});
