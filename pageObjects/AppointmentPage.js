import { BasePage } from "./basePage";

export class AppointmentPage extends BasePage {

    static get facilityField(){

        return cy.get('#combo_facility');
    }

    static get check(){

        return cy.get('#chk_hospotal_readmission');
    }


    static get healthCareProgram(){

        return cy.get('#radio_program_medicaid');
    }


    static get healthCareProgram(){

        return cy.get('#radio_program_medicaid');
    }


    static get dateGadgetClick(){

        return cy.get('#txt_visit_date');

    }

    static get dateGadgetDate(){

        return cy.get('.datepicker-days').contains('.day', '30');

    }


    static get dabutNostDatumu(){

        return cy.get('#menu-toggle');

    }


    static get commentField(){

        return cy.get('#txt_comment');

    }


    static get bookButton(){

        return cy.get('#btn-book-appointment');


    }

    static get validateFacility(){

        return cy.get('#facility');


    }

    static get validateHospitalRead(){

        return cy.get('#hospital_readmission');


    }

    static get validateHealthCareProgramm(){

        return cy.get('#program');

    }
    static get validateDate(){

        return cy.get('#visit_date');

    }

    static get validateComment(){

        return cy.get('#comment');

    }

}