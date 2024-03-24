describe(`Rock Paper Scissors Game Test`, () => {
  beforeEach(() => {
    cy.visit(`index.html`);
  });

  it(`Types name, selects choice from dropdown, and confirms history log`, () => {
    const testName = `Casey McMillen`; // Replace 'Your Name' with your actual name

    // Type the name in the input field
    cy.get(`#username`).type(testName);

    // Click the start game button
    cy.get(`#start-game-button`).click();

    // Select a choice from the dropdown
    cy.get(`#user-selection`).select(`Rock`); // Replace 'Rock' with the choice you want to select

    // Click the go button to submit the form
    cy.get(`#go-button`).click();

    // Assert that the game history contains the right number of tries
    cy.get(`#game-history`).should(`have.length`, 1);

    // Assert that the game history contains the right name
    cy.get(`#game-history`).contains(testName);
  });
});
