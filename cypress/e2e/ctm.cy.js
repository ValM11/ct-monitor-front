describe("CTM functionalities", () => {
  it("creates new study", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".btn").click();
    cy.get(":nth-child(1) > .form-control").type("ctm1@monitor.fr");
    cy.get(":nth-child(2) > .form-control").type("test1password");
    cy.get("form > .btn").click();
    cy.get(":nth-child(1) > .card > .card-img-overlay").click();
    let studyName = "RRR" + Math.random().toString().substring(0, 4);
    cy.get(":nth-child(1) > :nth-child(1) > .mb-3 > .form-control").type(
      studyName
    );
    cy.get(":nth-child(1) > :nth-child(2) > .mb-3 > .form-control").type(
      "NEW01022"
    );
    cy.get(":nth-child(2) > .form-control").type("Protocol for testing");
    cy.get(".col-sm-6 > .mb-3 > .form-control").type("2022-10-22");
    cy.get(".btn").click();
    cy.get(":nth-child(1) > .nav-link").click();
    cy.get(":nth-child(2) > .card > .card-img-overlay").click();
    cy.get(".listGroup");
    cy.contains(studyName).should("exist");
  });
});
