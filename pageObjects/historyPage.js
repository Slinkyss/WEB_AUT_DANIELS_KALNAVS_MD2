import { BasePage } from "../pageObjects/basePage";

export class HistoryPage extends BasePage {



    static get historyField(){

        return cy.get('#history');
    }



}