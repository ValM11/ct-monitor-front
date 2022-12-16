describe("Investigator functionalities", () => {
  it("add new patient", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".btn").click();
    cy.get(":nth-child(1) > .form-control").type("inv1@test.fr");
    cy.get(":nth-child(2) > .form-control").type("test1inv");
    cy.get("form > .btn").click();
    cy.get('[value="RDS1002"]').click();
    cy.get(":nth-child(1) > .btn").click();
    cy.get(":nth-child(2) > .col-sm-6 > .mb-3 > .form-control").type(5443223);
    cy.get(".btn").click();
    cy.get(":nth-child(1) > .nav-link").click();
    cy.get('[value="RDS1002"]').click();
    cy.get(":nth-child(2) > .btn").click();
    cy.get(".dropdown-toggle").click();
    cy.get(".dropdown-menu");
    cy.contains(5443223).should("exist");
  });
});
