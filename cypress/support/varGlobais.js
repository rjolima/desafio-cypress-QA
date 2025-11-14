const fakerbr = require('faker-br')

Cypress.Commands.add('salvarVariaveisGlobal', () => {
    const email = fakerbr.internet.email().toLowerCase().split('@')[0] + '@getnada.cc';
    const nomeCliente = fakerbr.name.firstName()
    const sobrenomeCliente = fakerbr.name.lastName()
    const endereco = 'Antonio Pio Cardoso'
    const cidade = 'SP'
    const cep = fakerbr.address.zipCodeValid();
    const celular = '3199' + fakerbr.random.number({ min: 1111111, max: 9999999 });

    Cypress.env('email', email);
    Cypress.env('nomeCliente', nomeCliente)
    Cypress.env('sobrenomeCliente', sobrenomeCliente)
    Cypress.env('endereco', endereco)
    Cypress.env('cidade', cidade)
    Cypress.env('cep', cep)
    Cypress.env('celular', celular)
});
