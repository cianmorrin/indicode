describe("Test API - Learning Style Results", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Login");
    cy.url().should("include", "/login");
    cy.get(":nth-child(1) > .form-control")
      .type("TestUser1")
      .should("have.value", "TestUser1");

    cy.get(":nth-child(2) > .form-control")
      .type("testing123")
      .should("have.value", "testing123");

    cy.get("#loginBtn").click();
    cy.contains("Welcome TestUser1");
  });

  it("Contains Learning Style Results", () => {
    cy.intercept({
      method: "GET",
      url: "/api/user/learningstyle",
    }).as("lsResultsApiCheck");

    cy.visit("/learning");

    cy.wait("@lsResultsApiCheck").then((interception) => {
      assert.isNotNull(
        interception.response.body,
        "Learning Style Results API call has data"
      );
    });
  });
});
