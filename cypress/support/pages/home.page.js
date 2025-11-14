//**********Mapeamento de elementos**********
const elements = {
    iconeButton: '.icon-user-unfollow',
}

//**********Ações**********
class HomePage {
    clicarIconeLogin() {
        cy.get(elements.iconeButton).click()
    }

    clicarEmComprar() {
        cy.contains('a', 'Comprar').should('not.be.disabled', { timeout: 2000 }).click( { force: true } )
    }

    //**********Validação**********

}

export default new HomePage();