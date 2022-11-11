/// <reference types="cypress" />;

describe("Demo test login", () => {
  const validUsername = "leauhai30032001@gmail.com";
  beforeEach(() => {
    cy.visit("https://app.memrise.com/signin");
  });

  it("Verify that users can not login with valid username and password", () => {
    cy.get("[data-testid=signinUsernameInput]").type(validUsername);
    cy.get("[data-testid=signinPasswordInput]").type("0379816509a");
    cy.get("[data-testid=signinFormSubmit]").click();
    cy.url().should("include", "/signin");
  });

  it("Verify that users can login with valid username and password", () => {
    cy.get("[data-testid=signinUsernameInput]").type(validUsername);
    cy.get("[data-testid=signinPasswordInput]").type("0379816509{enter}");
    cy.url().should("include", "/dashboard");
    cy.wait(5000);
  });
});
