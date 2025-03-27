const { AppointmentPage } = require("../../pageObjects/AppointmentPage");
const { BasePage } = require("../../pageObjects/basePage");
const { HistoryPage } = require("../../pageObjects/historyPage");
const { LoginPage } = require("../../pageObjects/loginPage");

describe("md2", () => {
  context("Without auto login", () => {
    beforeEach(() => {
     BasePage.visit();
    });

 
    it('- Make an Appointment', () => {


      //login
      BasePage.makeAppoitamnet.click();
      LoginPage.usernameField.type("John Doe");
      LoginPage.passwordField.type("ThisIsNotAPassword");
      LoginPage.loginButton.click();

      //appointement
      AppointmentPage.facilityField.select("Seoul CURA Healthcare Center");
      AppointmentPage.check.click();
      AppointmentPage.healthCareProgram.click();
      AppointmentPage.dateGadgetClick.click();
      AppointmentPage.dateGadgetDate.contains('.day', '30').click();
      //widget nepazud ja uzspiez datumu tapec atver menu 
      AppointmentPage.dabutNostDatumu.click();
      AppointmentPage.commentField.type("CURA Healthcare Service");
      AppointmentPage.bookButton.click();

      //validacija

      AppointmentPage.validateFacility.should("contain.text", "Seoul CURA Healthcare Center");
      AppointmentPage.validateHospitalRead.should("contain.text", "Yes");
      AppointmentPage.validateHealthCareProgramm.should("contain.text", "Medicaid");
      AppointmentPage.validateDate.should("contain.text", "30");
      AppointmentPage.validateComment.should("contain.text", "CURA Healthcare Service");
    });

    it.only('-Appointment history empty ', () => {
      
      //login
      BasePage.makeAppoitamnet.click();
      LoginPage.usernameField.type("John Doe");
      LoginPage.passwordField.type("ThisIsNotAPassword");
      LoginPage.loginButton.click();
      AppointmentPage.dabutNostDatumu.click();

      //validacija
      BasePage.openSideBar.should("contain.class", "active");
      
      //atver history
      BasePage.clickHistoryButton.contains('li','History').click();
      
      //validacija

      HistoryPage.historyField.should("contain.text","No appointment");

      


    });
  });
});