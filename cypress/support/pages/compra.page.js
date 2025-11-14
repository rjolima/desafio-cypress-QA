//**********Mapeamento de elementos**********
const elements = {
    buscarProdutoInput: '[placeholder="Enter your search ..."]',
    clicarBuscarButton: '[class="button-search btn btn-sm"]',
    selecionarProdutoLink: 'a.product-image img',
}

//**********Ações**********
class CompraPage {
   buscarUmProduto(nomeProduto) {
        cy.get(elements.buscarProdutoInput).eq(1).type(nomeProduto)
    }

    cliarEmBuscar() {
        cy.get(elements.clicarBuscarButton).eq(1).click()
    }

    selecionarPrimeiroProduto() {
        cy.get(elements.selecionarProdutoLink).first().click()
    }
 
    //**********Validação**********

}

export default new CompraPage();