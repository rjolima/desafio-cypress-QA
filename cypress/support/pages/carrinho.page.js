//**********Mapeamento de elementos**********
const elements = {
    informarCumpomInput: '#coupon_code',
    adicionarCumpomButton: '[name="apply_coupon"]',
    comprarCarrinhoButton: '.checkout-button'
}

//**********Ações**********
class CarrinhoPage {
    informarCumpomDesconto(cupom) {
        cy.get(elements.informarCumpomInput).should('be.visible').type(cupom)
    }

    adicioinarCumporDesconto() {
        cy.get(elements.adicionarCumpomButton).should('be.visible').click()
    }

    concluirCompraCarrinho() {
        cy.scrollTo('bottom')
        cy.get(elements.comprarCarrinhoButton).should('not.be.disabled', { timeout: 2000 }).click()
    }

    //**********Validação**********

    validarCumpomAplicado(mensagemSucesso) {
        cy.contains(mensagemSucesso).should('be.visible')
    }
}

export default new CarrinhoPage();