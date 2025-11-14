//**********Mapeamento de elementos**********
const elements = {
    selecionarTamanhoButton: '.button-variable-item-L',
    selecionarCorButton: '[data-title="Yellow"]',
    acessarCarrinhoButton: '.woocommerce-message > .button'
}

//**********Ações**********
class ComprProdutoPage {
    selecionarTamanho() {
        cy.get(elements.selecionarTamanhoButton).should('be.visible').click()
    }

    selecionarCor() {
        cy.get(elements.selecionarCorButton).should('be.visible').click()
    }

    clicarComprar() {
        cy.contains('button', 'Comprar').should('not.be.disabled', { timeout: 2000 }).click()
    }

    verCarrinhoCompra() {
        cy.get(elements.acessarCarrinhoButton).should('not.be.disabled', { timeout: 2000 }).click()
    }

    //**********Validação**********
    validarProdutoAdicionadoAoCarrinho(mensagemSucesso) {
        cy.contains(mensagemSucesso).should('be.visible')
    }

    validarPedidoRealizada(mensagemSucessoPedido) {
        cy.contains(mensagemSucessoPedido).should('be.visible')
    }

    validarCompraRealizada(mensagemSucessoCompra) {
        cy.contains(mensagemSucessoCompra).should('be.visible')
    }
}

export default new ComprProdutoPage();