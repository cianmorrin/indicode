describe("Test Dashboard Portals", () => {
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

  it("Learning Page Opended and Clickable", () => {
    cy.get(":nth-child(3) > a").click();
    cy.get(":nth-child(3) > a").click();

    cy.get('[data-id="1"]').click();
    cy.get("div > .btn").click();
    cy.contains("Introduction to Variables");
    cy.get(".sub-mod").should("contain", "Introduction to Variables");
    cy.get(":nth-child(2) > .page-link").click();
    cy.get(".sub-mod").should("contain", "Data Types");
    cy.get(":nth-child(2) > .page-link").click();
    cy.get(".sub-mod").should("contain", "Coding Challenge");

    cy.visit("/quiz");

    cy.get(".list-group-item > :nth-child(6)").click();
    cy.get("form > :nth-child(2) > .btn").click();
    cy.get("form > :nth-child(2) > .btn").click();

    cy.get(".list-group-item > :nth-child(7)").click();
    cy.get("form > :nth-child(2) > .btn").click();
    cy.get("form > :nth-child(2) > .btn").click();

    cy.get(".list-group-item > :nth-child(6)").click();
    cy.get("form > :nth-child(2) > .btn").click();
    cy.get("form > :nth-child(2) > .btn").click();

    cy.get(".list-group-item > :nth-child(8)").click();
    cy.get("form > :nth-child(2) > .btn").click();
    cy.get("form > :nth-child(2) > .btn").click();

    cy.get(".list-group-item > :nth-child(9)").click();
    cy.get("form > :nth-child(2) > .btn").click();
    cy.get("form > :nth-child(2) > .btn").click();

    cy.get(".alert > :nth-child(1)").should("contain", "Your score : 5/5");

    cy.intercept({
      method: "GET",
      url: "/api/user/quizresults",
    }).as("quizResultsApiCheck");

    cy.visit("/");

    cy.wait("@quizResultsApiCheck").then((interception) => {
      assert.isNotNull(
        interception.response.body,
        "Quiz Results API call has data"
      );
    });
  });
});
