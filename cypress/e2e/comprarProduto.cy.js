///<reference types="cypress"/>

import compraProdutoPage from "../support/pages/compraProduto.page";
import carrinhoPage from "../support/pages/carrinho.page";
import checkoutPage from "../support/pages/checkout.page";

describe('Realizar compra do produto selecionado com sucesso', () => {
    beforeEach(() => {
        cy.salvarVariaveisGlobal()
        cy.clearCookies()
        cy.visit(Cypress.config('urlEbac'))
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.logarNovoCliente()
        cy.adicionarProdutoCarrinho()
    });

    context('Principal', () => {
        it('Finalizar compra do produto adicionando cupom com sucesso', () => {
            //Arrange
            var mensagemSucessoPedido = 'Pedido recebido'
            var mensagemSucessoCompra = 'Obrigado. Seu pedido foi recebido.'

            // Act
            compraProdutoPage.verCarrinhoCompra()
            carrinhoPage.concluirCompraCarrinho()
            checkoutPage.nomeCliente()
            checkoutPage.sobrenomeCliente()
            checkoutPage.enderecoCliente()
            checkoutPage.cidadeCliente()
            checkoutPage.cepCliente()
            checkoutPage.celularCliente()
            checkoutPage.termoCliente()
            checkoutPage.finalizarCompra()

            //Assert
            compraProdutoPage.validarPedidoRealizada(mensagemSucessoPedido)
            compraProdutoPage.validarCompraRealizada(mensagemSucessoCompra)

        });

        it('Adicionar cupom com sucesso', () => {
            //Arrange
            var cupom = 'teste'
            var mensagemSucesso = 'Código de cupom aplicado com sucesso.'

            // Act
            compraProdutoPage.verCarrinhoCompra()
            carrinhoPage.informarCumpomDesconto(cupom)
            carrinhoPage.adicioinarCumporDesconto()

            //Assert
            carrinhoPage.validarCumpomAplicado(mensagemSucesso)
        });
    });

    context('Excecao', () => {
        it('Validar campos não preenchidos', () => {
            //Arrange
            const mensagensEsperadas = [
                'O campo "Nome" do endereço de faturamento é um campo obrigatório.',
                'O campo "Sobrenome" do endereço de faturamento é um campo obrigatório.',
                'O campo "Endereço" do endereço de faturamento é um campo obrigatório.',
                'O campo "Cidade" do endereço de faturamento é um campo obrigatório.',
                'O campo "CEP" do endereço de faturamento não é um CEP válido.',
                'O campo "Telefone" do endereço de faturamento é um campo obrigatório.',
                'Leia e aceite os termos e condições para prosseguir com o seu pedido.'
            ];

            // Act
            compraProdutoPage.verCarrinhoCompra()
            carrinhoPage.concluirCompraCarrinho()
            checkoutPage.finalizarCompra()

            //Assert
            checkoutPage.validarCamposVazio(mensagensEsperadas)
        });
    });
});