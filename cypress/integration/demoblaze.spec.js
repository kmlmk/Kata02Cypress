/// <reference types="cypress" />

const { faker } = require("@faker-js/faker");

const username = faker.internet.userName();
const password = faker.internet.password();

describe("kata02", () => {
  before(() => {
    cy.visit("https://www.demoblaze.com");
  });

  /*it("create user", () => {
    cy.get("#signin2").click();
    cy.get("#sign-username").type(username);
    cy.get("#sign-password").type(password);
  });

   it("login", () => {
    cy.get("#login2").click();
    cy.get('id="loginusername"').type(username);
    cy.get('id="loginpassword"').type(password);
    cy.get('class="modal-footer"').click();
  });*/
});
