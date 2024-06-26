describe('Тестирование формы авторизации', function () {

    it('end-2-end покупки аватара', function () {
       cy.visit('https://pokemonbattle.me/')
       cy.get(':nth-child(1) > .auth__input').type('pagnisospu@gufum.com');
       cy.get('#password').type('12345A');
       cy.get('.auth__button').click();
       cy.get('[href="/shop"] > .header__btn-img').click();
       cy.get('.available > .shop__button').first().click();
       cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555 5555 5555 5599');
       cy.get(':nth-child(1) > .pay_base-input-v2').type('0525');
       cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
       cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Name');
       cy.get('.pay-btn').click();
       cy.get('#cardnumber').type('56456');
       cy.get('.payment__submit-button').click();
       cy.contains('Покупка прошла успешно').should('be.visible');
    })
})
