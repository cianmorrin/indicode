describe("Test Login", () => {
  it("Visits IndiCode", () => {
    cy.visit("/"); // Url is set to "http://localhost:8000/#/" in cypress config file
    cy.contains("Login");
    cy.url().should("include", "/login");
    cy.get(":nth-child(1) > .form-control")
      .type("TestUser")
      .should("have.value", "TestUser");

    cy.get(":nth-child(2) > .form-control")
      .type("testing123")
      .should("have.value", "testing123");

    cy.get("#loginBtn").click();
    cy.contains("Welcome TestUser");
  });
});
