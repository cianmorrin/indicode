describe("Test Dashboard Portals", () => {
  beforeEach(() => {
    cy.visit("/");
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

  it("Opens Learning Style Portal", () => {
    cy.get("#openLSPortal").click();
    cy.wait(2000);
    cy.get(".ls-res-content > :nth-child(2) > .btn").click();
  });

  it("Opens Quiz Results Portal", () => {
    cy.get("#openQuizPortal").click();
    cy.wait(2000);
    cy.get(".close > span").click();
  });
  it("Opens Coding Portal", () => {
    cy.get("#openCodePortal").click();
    cy.wait(3000);
    cy.get(".close > span").click();
  });
});
