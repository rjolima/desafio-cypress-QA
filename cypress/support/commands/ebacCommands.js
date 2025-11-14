import homePage from '../pages/home.page';
import loginPage from '../pages/login.page';
import compraPage from '../pages/compra.page';
import compraProdutoPage from '../pages/compraProduto.page';
import minhaContaPage from '../pages/minhaConta.page';

import usuario from '../../fixtures/dados/usuario.json';

Cypress.Commands.add("logarComCliente", () => {
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

Cypress.Commands.add("adicionarProdutoCarrinho", () => {
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

Cypress.Commands.add("logarNovoCliente", () => {
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