describe("Questionnaire", () => {
  it("Visits IndiCode & Register", () => {
    cy.visit("/");
    cy.contains("Login");
    cy.url().should("include", "/login");

    cy.get("#registerHeader").click();

    cy.url().should("include", "/register");

    cy.get(":nth-child(1) > .form-control")
      .type("IndiTestUser1")
      .should("have.value", "IndiTestUser1");

    cy.get(":nth-child(2) > .form-control")
      .type("tester@mail.com")
      .should("have.value", "tester@mail.com");

    cy.get(":nth-child(3) > .form-control")
      .type("testing123")
      .should("have.value", "testing123");

    cy.get(":nth-child(4) > .form-control")
      .type("testing123")
      .should("have.value", "testing123");

    cy.get("#submitFormRegisterBtn").click();
    cy.contains("Welcome IndiTestUser1");
  });

  it("Fills out questionnaire", function () {
    cy.get("#doQuestionnaire").click();
    cy.get(':nth-child(1) > .custom-control > [value="option_A"]').click();
    cy.get(':nth-child(2) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(3) > .custom-control > [value="option_A"]').click();
    cy.get(':nth-child(4) > .custom-control > [value="option_A"]').click();
    cy.get(':nth-child(5) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(6) > .custom-control > [value="option_A"]').click();

    cy.get(":nth-child(2) > .page-link").click();

    cy.get(':nth-child(1) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(2) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(3) > .custom-control > [value="option_A"]').click();
    cy.get(':nth-child(4) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(5) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(6) > .custom-control > [value="option_A"]').click();

    cy.get(":nth-child(3) > .page-link").click();

    cy.get(':nth-child(1) > .custom-control > [value="option_A"]').click();
    cy.get(':nth-child(2) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(3) > .custom-control > [value="option_A"]').click();
    cy.get(':nth-child(4) > .custom-control > [value="option_A"]').click();
    cy.get(':nth-child(5) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(6) > .custom-control > [value="option_A"]').click();

    cy.get(":nth-child(4) > .page-link").click();

    cy.get(':nth-child(1) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(2) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(3) > .custom-control > [value="option_A"]').click();
    cy.get(':nth-child(4) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(5) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(6) > .custom-control > [value="option_A"]').click();

    cy.get(":nth-child(5) > .page-link").click();

    cy.get(':nth-child(1) > .custom-control > [value="option_A"]').click();
    cy.get(':nth-child(2) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(3) > .custom-control > [value="option_A"]').click();
    cy.get(':nth-child(4) > .custom-control > [value="option_A"]').click();
    cy.get(':nth-child(5) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(6) > .custom-control > [value="option_A"]').click();

    cy.get(":nth-child(6) > .page-link").click();

    cy.get(':nth-child(1) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(2) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(3) > .custom-control > [value="option_A"]').click();
    cy.get(':nth-child(4) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(5) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(6) > .custom-control > [value="option_A"]').click();

    cy.get(":nth-child(7) > .page-link").click();

    cy.get(':nth-child(1) > .custom-control > [value="option_A"]').click();
    cy.get(':nth-child(2) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(3) > .custom-control > [value="option_A"]').click();
    cy.get(':nth-child(4) > .custom-control > [value="option_A"]').click();
    cy.get(':nth-child(5) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(6) > .custom-control > [value="option_A"]').click();

    cy.get(":nth-child(8) > .page-link").click();

    cy.get(':nth-child(1) > .custom-control > [value="option_B"]').click();
    cy.get(':nth-child(2) > .custom-control > [value="option_B"]').click();

    cy.get(".form-group > .btn").click();
  });
});
