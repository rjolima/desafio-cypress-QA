//**********Mapeamento de elementos**********
const elements = {
    iconeButton: '.icon-user-unfollow',
    logarButton: 'input[type="submit"][name="login"]',
    registrarButton: 'input[type="submit"][name="register"]',
    informarEmailInput: '#username',
    informarSenhaInput: '#password',
    informarEmailRegistroInput: '#reg_email',
    informarSenhaRegistroInput: '#reg_password',
}

//**********Ações**********
class LoginPage {
    clicarIconeLogin() {
        cy.get(elements.iconeButton).click()
    }

    informarEmail(email) {
        cy.get(elements.informarEmailInput).clear().type(email)
    }

    informarSenha(senha) {
        cy.get(elements.informarSenhaInput).clear().type(senha)
    }

    informarEmailRegistro(email) {
        cy.get(elements.informarEmailRegistroInput).clear().type(email)
    }

    informarSenhaRegistro(senha) {
        cy.get(elements.informarSenhaRegistroInput).clear().type(senha)
    }

    logarCliente() {
        cy.get(elements.logarButton).click()
    }

    registrarNovoCliente() {
        cy.get(elements.registrarButton).click()
    }

    //**********Validação**********
    validarLogin() {
        cy.get(elements.logarButton).should('exist')
    }

    validarRegistro() {
        cy.get(elements.registrarButton).should('exist')
    }

    validarLoginComSucesso(mensagemSucesso) {
        cy.contains(mensagemSucesso).should('be.visible')
    }

    validarLoginComSucessoCadastro(mensagemCadastroSucesso) {
        cy.contains(mensagemCadastroSucesso).should('be.visible')
    }

    validarLoginIncorreto(emailIncorreto) {
        cy.contains(emailIncorreto).should('be.visible')
    }

    validarMensagemEmailIncorreto() {
        cy.get('input[type="email"]')
            .then(($input) => {
                const mensagem = $input[0].validationMessage
                cy.log('Mensagem exibida:', mensagem)
                expect(mensagem).to.contain('@')
            })
    }
}

export default new LoginPage();