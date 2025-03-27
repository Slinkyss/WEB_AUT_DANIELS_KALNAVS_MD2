export class BasePage {
    static visit() {
        return cy.visit(Cypress.config('baseUrl')); 
    }



    static get makeAppoitamnet(){
        return cy.get('#btn-make-appointment');
    }

    static get openSideBar(){
        return cy.get('#sidebar-wrapper');
    }


    static get clickHistoryButton(){
        return cy.get('.sidebar-nav');
    }


  }
  