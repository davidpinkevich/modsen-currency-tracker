describe("Open page with timeline", () => {
  it("test logic with loading and filters", () => {
    cy.visit("http://localhost:3000/timeline");

    cy.get("*").contains("Loading").should("be.visible");

    cy.get("*")
      .contains("The graph was built successfully")
      .should("be.visible");

    cy.get('input[type="date"]').eq(0).type("2024-03-20", { force: true });
    cy.get('input[type="date"]').eq(0).should("have.value", "2024-03-20");

    cy.get('input[type="date"]').eq(1).type("2024-04-25", { force: true });
    cy.get('input[type="date"]').eq(1).should("have.value", "2024-04-25");

    cy.get('[data-testcy="select"]').eq(0).click();

    cy.get("li").eq(1).click();
    cy.get("*").contains("Canadian Dollar").should("be.visible");

    cy.get('[data-testcy="create"]').click();
    cy.get("*").contains("Loading").should("be.visible");

    cy.get("canvas").should("be.visible");
  });
});
