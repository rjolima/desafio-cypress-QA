///<reference types="cypress"/>

import homePage from '../support/pages/home.page'
import loginPage from '../support/pages/login.page';

import usuario from '../fixtures/dados/usuario.json'

describe('Cadastrar novo usuário loja EBAC', () => {
    beforeEach(() => {
        cy.salvarVariaveisGlobal()
        cy.clearCookies()
        cy.visit(Cypress.config('urlEbac'))
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    });

    context('Principal', () => {
        it('Realizar login na EBAC-SHOP com sucesso', () => {
            //Arrange
            var email = Cypress.env('email')
            let nomeEmail = Cypress.env('email').split('@')[0]
            var mensagemCadastroSucesso = `Welcome ${nomeEmail} !`

            // Act
            homePage.clicarIconeLogin()
            loginPage.validarRegistro()
            loginPage.informarEmailRegistro(email)
            loginPage.informarSenhaRegistro(usuario.cliente.senha)
            loginPage.registrarNovoCliente()

            //Assert
            loginPage.validarLoginComSucessoCadastro(mensagemCadastroSucesso)
        });
    });

    context('Excecao', () => {
        const emails = [
            'dino.com.br',
            'gmail.com',
            '@gmail.com',
            'dino@',
            '123456',
            '!@)(*¨&',
            'teste023'
        ]

        emails.forEach((email) => {
            it('tentar logar com email incorreto: ' + email, () => {
                //Arrange

                //Act
                homePage.clicarIconeLogin()
                loginPage.informarEmailRegistro(email)
                loginPage.informarSenhaRegistro(usuario.cliente.senha)
                loginPage.registrarNovoCliente()

                //Assert
                loginPage.validarMensagemEmailIncorreto()
            });
        });
    });
});