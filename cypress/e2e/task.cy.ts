describe("Tasks", () => {
  const taskTitle = "Automatically created task 001";

  beforeEach(() => {
    cy.visit("/");

    cy.get("input[name=task-title]").type(`${taskTitle}{enter}`, {
      log: false,
    });
  });

  it("should create a task", () => {
    cy.visit("/");

    cy.get("input[name=task-title]").type("test task{enter}", {
      log: false,
    });

    cy.get("button").contains("test task");
  });

  it("should toggle a task status", () => {
    cy.visit("/");

    cy.get("button").contains(taskTitle).click();

    cy.get("#done-icon").should("be.visible");

    cy.get("button").contains(taskTitle).click();

    cy.get("#open-icon").should("be.visible");
  });

  it("should remove a task", () => {
    cy.visit("/");

    cy.get("button").contains(taskTitle).should("be.visible");

    cy.get("#delete-task-button").click();

    cy.get("button").contains(taskTitle).should("not.exist");
  });

  it("should clear tasks", () => {
    cy.get("button").contains(taskTitle).click();

    cy.get("button").contains("Clear").click();

    cy.get("button").contains(taskTitle).should("not.exist");
  });
});
