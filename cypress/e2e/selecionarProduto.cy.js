///<reference types="cypress"/>
import compraPage from "../support/pages/compra.page";
import compraProdutoPage from "../support/pages/compraProduto.page";
import homePage from "../support/pages/home.page";
import minhaContaPage from "../support/pages/minhaConta.page";

describe('Buscar por produto na loja', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit(Cypress.config('urlEbac'))
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.logarComCliente()
    });

    context('Principal', () => {
        it('Buscar por produto no EBAC e add ao carrinho com sucesso', () => {
            //Arrange
            var nomeProduto = 'Tiberius Gym Tank'
            var mensagemSucesso = '“Tiberius Gym Tank” foi adicionado no seu carrinho. '

            // Act
            minhaContaPage.retornarHomePage()
            homePage.clicarEmComprar()
            compraPage.buscarUmProduto(nomeProduto)
            compraPage.cliarEmBuscar()
            compraProdutoPage.selecionarTamanho()
            compraProdutoPage.selecionarCor()
            compraProdutoPage.clicarComprar()

            //Assert
            compraProdutoPage.validarProdutoAdicionadoAoCarrinho(mensagemSucesso)
        });
    });
});