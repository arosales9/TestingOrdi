function Prueba(i) {
  it(`Login`, function(){
    cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSeSmVHSDuzUFpsY_2hCoR5t9VzdbHnIE4HKRVEgfefZtVuNZQ/viewform');
    cy.get('input[type="email"]').type('arosales9@ucol.mx');
    cy.get('input[name="entry.30947606"]').type('Anthony');
    cy.get('.freebirdFormviewerViewNavigationProgressIndicatorFill').should('have.css','color').end('eq','rgb(3, 169, 244)');
    cy.get('[jsname="OCpkoe"]').click();
    cy.wait(500)
  });

  it(`Validacion de imagenes visibles`, function(){
      cy.url().should('eq','https://docs.google.com/forms/d/e/1FAIpQLSeSmVHSDuzUFpsY_2hCoR5t9VzdbHnIE4HKRVEgfefZtVuNZQ/formResponse');
      cy.get('.freebirdSolidBackground').should('have.css', 'background-color').and('equal', 'rgb(247, 179, 31)');
      cy.get('[data-item-id="836516292"] img').should('be.visible');
      cy.get('[data-item-id="1820476437"] img').should('be.visible');
      cy.get('[data-item-id="978722755"] img').should('be.visible');
      cy.get('[data-item-id="476252279"] img').should('be.visible');
      cy.get('[data-item-id="1457080985"] img').should('be.visible');
  });

  it(`Preguntas`, function(){
  	cy.contains('For a software system, it is normally impossible').click();
  	cy.contains('Structural testing').click();
  	cy.get('[name="entry.322303059"]').type('432');
  	cy.contains('32, 37, 40').click();
  	cy.get('[data-item-id="978722755"] [data-value="4"]').click();
  	cy.get('[data-item-id="326650820"]').contains('expect').click();
  	cy.get('[data-item-id="326650820"]').contains('should').click();
  	cy.get('[data-item-id="1820476437"] [data-row-index="0"] [data-value="1"]').click();
  	cy.get('[data-item-id="1820476437"] [data-row-index="1"] [data-value="2"]').click();
  	cy.get('[data-item-id="476252279"] [data-value="4, 15, 65, 92, 159"]').click();
  	cy.get('[data-item-id="436307005"] [data-value="it"]').click();
  	cy.get('[data-item-id="1001618343"] [data-value="Black-box"]').click();
  	cy.get('[data-item-id="610557914"] [data-value="Regression testing"]').click();
      cy.get('[data-item-id="204235310"] [data-value="Acceptance, Integration, Unit"]').click();
      /*Cypress.on('uncaught:exception',(err,runnable) => {
	  cy.contains('Enviar').click();
	  })*/
      cy.get('.quantumWizButtonPaperbuttonContent .quantumWizButtonPaperbuttonFocusOverlay').should('contains','ENVIAR');
      cy.get('[jsname="M2UYVd"]').click();
  });
    it(`Ver respuestas`, function(){
	cy.url().should('eq','https://docs.google.com/forms/d/e/1FAIpQLSeSmVHSDuzUFpsY_2hCoR5t9VzdbHnIE4HKRVEgfefZtVuNZQ/formResponse')
	cy.get('.freebirdFormviewerViewResponsePageTitle freebirdCustomFont').should('contains','Cypress exercise');
  });
}

describe('Iniciando prueba', function (){
	//for (var i = 0; i < 1; i++) 
 		Prueba(1);
});
