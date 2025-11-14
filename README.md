# 🧪 Projeto de Testes Automatizados - desafio-cypress-QA

## 📚 Arquitetura do Projeto

- **Interpretador JavaScript:** [Node.js](https://nodejs.org/en/)
- **IDE de Desenvolvimento:** [Visual Studio Code](https://code.visualstudio.com)
- **Linguagem:** [JavaScript](https://www.javascript.com)
- **Framework de Testes Automatizados:** [Cypress](https://www.cypress.io)
- **Relatório de Teste:** [Mochawesome](https://www.npmjs.com/package/mochawesome)

---

## 🚀 Como Executar o Projeto

 1. Install Node JS 
 2. Install NPM 
 3. Instalar Cypress (npm install cypress --save-dev)
 4. Install VSCode

### 1️⃣ Clonar o repositório

```bash
1 - Git clone: https://github.com/rjolima/desafio-cypress-QA.git
2 - GitHub CLI: gh repo clone rjolima/desafio-cypress-QA
 
Etapas para clonar o repositório
🔹 Opção 1 — Clonar diretamente pelo VS Code (modo gráfico)

Copie o caminho informado acima, opção: "1 - Git clone" do bash
Abra o VS Code
No Welcome, clique em: “Clone Git Repository…”, no VsCode na barra que ativou cole o "1 - Git clone"
Informe o local onde será salvo o projeto (Ex.: C:/Ambiente/)
Clique Selecionar repositório de destino

Copie o caminho informado acima, opção: "2 - GitHub CLI" do bash
Abra o VS Code
Na barra superior clique em “View” > “Source Control” > “Clone Repository”, no VsCode na barra que ativou cole o "2 - GitHub CLI"
Informe o local onde será salvo o projeto (Ex.: C:/Ambiente/)
Clique Selecionar repositório de destino

Abrir o VSCode com o projeto e no terminal digitar o comando (powershell):

    npm install # vai realizar a instalação de todas as dependencias criadas no projeto "Package.json"

📁 Estrutura dos Testes
cypress/
 └─ e2e/
     ├─ comprarProduto.cy.js
     ├─ logarLoja.cy.js
     ├─ registrarNovoUsuario.cy.js
     └─ selecionarProduto.cy.js

🧭 Cenários de Teste

comprarProduto.cy
    Adicionar produtos ao carrinho
    Aplicar cupom e validar retorno
    Finalizar compra
    Validar mensagens de erro ao não preencher campos obrigatórios

logarLoja.cy
    Campos obrigatórios
    Credenciais inválidas
    Login com usuário válido

registrarNovoUsuario.cy
    Cadastro usando dados mockados
    Validação de e-mail inválido
    Validação de e-mail já cadastrado

selecionarProduto.cy
    Buscar produto por nome
    Validar resultados
    Selecionar item desejado
    Preencher atributos
    Adicionar ao carrinho
