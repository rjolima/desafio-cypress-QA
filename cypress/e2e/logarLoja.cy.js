///<reference types="cypress"/>

import homePage from '../support/pages/home.page'
import loginPage from '../support/pages/login.page';
import minhaContaPage from '../support/pages/minhaConta.page';

import usuario from '../fixtures/dados/usuario.json'

describe('Realizar login loja EBAC', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit(Cypress.config('urlEbac'))
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    });

    context('Principal', () => {
        it('Realizar login na EBAC-SHOP com sucesso', () => {
            //Arrange
            var mensagemSucesso = "Welcome dinno.lima !"

            // Act
            homePage.clicarIconeLogin()
            loginPage.validarLogin()
            loginPage.informarEmail(usuario.cliente.email)
            loginPage.informarSenha(usuario.cliente.senha)
            loginPage.logarCliente()

            //Assert
            loginPage.validarLoginComSucesso(mensagemSucesso)
        });

        it('Realizar logout na EBAC-SHOP com sucesso', () => {
            //Arrange

            // Act
            homePage.clicarIconeLogin()
            loginPage.validarLogin()
            loginPage.informarEmail(usuario.cliente.email)
            loginPage.informarSenha(usuario.cliente.senha)
            loginPage.logarCliente()
            minhaContaPage.clicarIconeLogout()

            //Assert
            minhaContaPage.validarIconeLogin()
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
                var emailIncorreto = `Erro: O usuário ${email} não está registrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail. `

                //Act
                homePage.clicarIconeLogin()
                loginPage.informarEmail(email)
                loginPage.informarSenha(usuario.cliente.senha)
                loginPage.logarCliente()

                //Assert
                loginPage.validarLoginIncorreto(emailIncorreto)
            });
        });

        it('Tentar logar com senha incorreta', () => {
            //Arrange
            var senhaIncorreto = 'Erro: A senha fornecida para o e-mail dinno.lima@gmail.com está incorreta. Perdeu a senha?'

            //Act
            homePage.clicarIconeLogin()
            loginPage.informarEmail(usuario.cliente.email)
            loginPage.informarSenha(usuario.incorreta.senha)
            loginPage.logarCliente()

            //Assert
            loginPage.validarLoginIncorreto(senhaIncorreto)
        });

        it('Tentar logar sem informar email', () => {
            //Arrange
            var senhaIncorreto = 'Erro: Nome de usuário é obrigatório.'

            //Act
            homePage.clicarIconeLogin()
            loginPage.informarSenha(usuario.incorreta.senha)
            loginPage.logarCliente()

            //Assert
            loginPage.validarLoginIncorreto(senhaIncorreto)
        });

        it('Tentar logar sem informar senha', () => {
            //Arrange
            var senhaIncorreto = 'Erro: O campo da senha está vazio.'

            //Act
            homePage.clicarIconeLogin()
            loginPage.informarEmail(usuario.cliente.email)
            loginPage.logarCliente()

            //Assert
            loginPage.validarLoginIncorreto(senhaIncorreto)
        });
    });
});