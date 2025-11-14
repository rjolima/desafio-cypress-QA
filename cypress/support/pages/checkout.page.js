//**********Mapeamento de elementos**********
const elements = {
    nomeInput: '#billing_first_name',
    sobrenomeInput: '#billing_last_name',
    enderecoInput: '#billing_address_1',
    cidadeInput: '#billing_city',
    cepInput: '#billing_postcode',
    celularInput: '#billing_phone',
    termoCheckBox: '#terms',
    finalizarCompraButton: '#place_order',
    validarCampoVazioText: 'ul.woocommerce-error > li'
}

//**********Ações**********
class CheckoutPage {
    nomeCliente() {
        cy.get(elements.nomeInput).should('be.visible').clear().type(Cypress.env('nomeCliente'))
    }

    sobrenomeCliente() {
        cy.get(elements.sobrenomeInput).should('be.visible').clear().type(Cypress.env('sobrenomeCliente'))
    }

    enderecoCliente() {
        cy.get(elements.enderecoInput).should('be.visible').clear().type(Cypress.env('endereco'))
    }

    cidadeCliente() {
        cy.get(elements.cidadeInput).should('be.visible').clear().type(Cypress.env('cidade'))
    }

    cepCliente() {
        cy.get(elements.cepInput).should('be.visible').clear().type(Cypress.env('cep'))
    }

    celularCliente() {
        cy.get(elements.celularInput).should('be.visible').clear().type(Cypress.env('celular'))
    }

    termoCliente() {
        cy.get(elements.termoCheckBox).should('be.visible').click()
    }

    finalizarCompra() {
        cy.scrollTo('bottom')
        cy.get(elements.finalizarCompraButton).should('not.be.disabled', { timeout: 3000 }).click()
    }

    //**********Validação**********
    validarCamposVazio(mensagensEsperadas) {
        cy.get(elements.validarCampoVazioText)
            .should('have.length', mensagensEsperadas.length)
            .each((item, index) => {
                cy.wrap(item)
                    .invoke('text')
                    .then(texto => {
                        const textoLimpo = texto.trim().replace(/\s+/g, ' ');
                        expect(textoLimpo).to.eq(mensagensEsperadas[index]);
                    });
            });
    }
}

export default new CheckoutPage();