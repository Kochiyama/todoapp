describe("Create Task", () => {
  it("passes", () => {
    cy.visit("/");

    const taskTitle = "Automatically created task 001";

    cy.get("input[name=task-title]").type(`${taskTitle}{enter}`, {
      log: false,
    });

    cy.get("button").contains(taskTitle);
  });
});
