describe("navigation in app", () => {
  it("navigation through all pages ", () => {
    cy.visit("http://localhost:3000/");

    cy.get("header").contains("Home").click();
    cy.url().should("include", "http://localhost:3000/");

    cy.get("header").contains("Timeline").click();
    cy.url().should("include", "http://localhost:3000/timeline");

    cy.get("header").contains("Bank card").click();
    cy.url().should("include", "http://localhost:3000/card");

    cy.get("header").contains("Contacts").click();
    cy.url().should("include", "http://localhost:3000/contacts");
  });

  it("when you go to non-existent page", () => {
    cy.visit("http://localhost:3000/asd");
    cy.get("main").contains("This path not found!").should("exist");
  });
});
