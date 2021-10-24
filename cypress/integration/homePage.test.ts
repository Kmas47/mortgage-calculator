/// <reference types="cypress" />
import { selectInput } from "../support/commands";

describe("home Page test", () => {
  beforeEach(function () {
    cy.fixture("constants").then((constant) => {
      this.constant = constant;
    });
  });

  it("should visit home page", function () {
    cy.visit("/");
    cy.wait(1000);
    cy.contains(this.constant.headerTitle);
    cy.get("button").should("have.id", this.constant.changeTheme);
  });

  it("should fill up mortgage payment form", function () {
    cy.get(`input[id=${this.constant.mortgageAmount}]`).type(
      "{selectall}500000"
    );
    cy.get(`input[id=${this.constant.interestRate}]`).type("{selectall}10");
    selectInput(this.constant.amortizationYears, 20);
    selectInput(this.constant.paymentFrequency, 12);
    selectInput(this.constant.mortgageTerm, 10);
  });

  it("should fill up mortgage pre-payment form", function () {
    cy.get(`input[id=${this.constant.mortgagePrePaymentAmount}]`).type(
      "{selectall}1000"
    );
    selectInput(this.constant.mortgagePrePaymentFrequency, 20);
  });

  it("should scroll down to show calculation", function () {
    cy.contains(this.constant.tableTitle).scrollIntoView({ duration: 2000 });
    cy.wait(2000);
  });

  it("Should toggle dark theme", function () {
    cy.scrollTo("top", { duration: 3000 });
    cy.clearLocalStorage();
    cy.get(`[id=${this.constant.changeTheme}]`).click();
    cy.wait(1000).then(() => {
      cy.wrap(localStorage.getItem(this.constant.darkMode)).should(
        "be.eq",
        "true"
      );
    });
  });
});
