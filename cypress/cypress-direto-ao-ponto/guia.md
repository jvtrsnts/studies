# Guia Cypress

---

## Primeiros Passos:
1. **Inicializar um Projeto Node**:

    - `npm init -y`
    - -y = yes: sim para todas perguntas iniciais 

2. **Instalar Cypress**
    - `npm install -d cypress`
    - -d = detach: libera o terminal

3. **Abrir Cypress**
    - `npx cypress open`

---

## Estrutura de pastas/arquivos

- **cypress.config.ts**:
    - arquivo de configuração do cypress
    - variaveis de ambiente, videos, urls, etc...

- **e2e**:
    - pasta que contém arquivos de testes

- **fixtures**:
    - arquivos que geram dados/mocks

- **support**:
    - arquivo de suporte/auxiliares a execução dos testes