/// <reference types="cypress" />

it('MNP Dashboard', function () {
    cy.visit('http://172.25.253.84:5000/');
    //SMS M PORTED DATA
    cy.get('[href="/views/sms_mnp_ported_data"] > .container > .row > .homeBtns').click();
    cy.wait(6000);
    cy.get('.logo').click();
    //SMS M API QUERIES LAST 7 DAYS HOUR
    cy.get('[href="/views/sms_mnp_api_queries_last_7_days_hour"] > .container > .row > .homeBtns').click();
    cy.wait(7000);
    cy.get('.logo').click();
    //SMS M API LOG
    cy.get('[href="/views/sms_mnp_api_log"] > .container > .row > .homeBtns').click();
    cy.wait(7000);
    cy.get('.logo').click();
})

it('MNP Login page', function(){
    //cy.visit('http://172.25.253.84:5000/');
   // cy.get('.login-nav > a').click()
        

} )