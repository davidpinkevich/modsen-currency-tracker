describe("Button color change", () => {
  it("should change button color to white on click", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testcy="swiper"]').click();

    cy.get('[data-testcy="swiper"]').should(
      "have.css",
      "background-color",
      "rgb(255, 255, 255)"
    );

    cy.get('[data-testcy="swiper"]').click();

    cy.get('[data-testcy="swiper"]').should(
      "have.css",
      "background-color",
      "rgb(3, 3, 4)"
    );
  });
});
