//**********Mapeamento de elementos**********
const elements = {
    validarIconeLoginButton: 'a[title="Login"]',
    retornarHomeLink: 'div.logo-in-theme img.logo-img', 
}

//**********Ações**********
class MinhaContaPage {
    clicarIconeLogout() {
        cy.contains('a', 'Logout').should('be.visible').click()
    }

    retornarHomePage() {
        cy.get(elements.retornarHomeLink).should('be.visible').click()
    }

    //**********Validação**********
    validarIconeLogin() {
        cy.get(elements.validarIconeLoginButton).should('be.visible')
    }
}

export default new MinhaContaPage();