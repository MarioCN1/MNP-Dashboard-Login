/// <reference types="cypress" />

describe('Api Tests',function() {

    Cypress.config('baseUrl', 'http://172.25.253.84:3000/v1')

 it('SMS MNP Call 1', function(){
    cy.request('GET','/number-lookup?msisdn=18492152915')
        .then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.status).to.be.equal(200);
            expect(response.body).not.to.be.null;
            expect(response.body).to.have.property('numbertype', 'mobile');
        
        })
    })       
})
           
