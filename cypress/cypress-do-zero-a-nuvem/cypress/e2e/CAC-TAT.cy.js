describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('src/index.html')
  })

  it('Verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  // .only: foca a execução nesse caso de teste
  // Exercícios
  it('Preenche os campos obrigatórios e enviar formulário', () => {
    // # = ids
    cy.get('#firstName').type('João Vitor')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('email@email.com')
    cy.get('#open-text-area').type('Realmente esta funcionando', {
      delay: 100
    })    
    // . = classes
    cy.get('.button').click()
    cy.get('.success').should('be.visible')
  })

  // Extra 2
  it('Exibe mensagem de erro ao submeter o formulário com um email com formatação válida', () => {
    cy.get('#firstName').type('João Vitor')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('email')
    cy.get('#open-text-area').type('Realmente esta funcionando')
    cy.get('.button').click()
    cy.get('.error').should('be.visible')
  })

  // Extra 3
  it('Garante que apenas números são inseridos no campos de telefone', () => {
    cy.get('#phone').type('abcdefghijklmnopqrstuvwxyz')
    .should('not.have.value', 'abcdefghijklmnopqrstuvwxyz')
  })

  // Extra 4
  it.only('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('João Vitor')
    cy.get('#lastName').type('Santos')
    cy.get('#email').type('email@email.com')
    cy.get('#open-text-area').type('Realmente esta funcionando')
    cy.get('#phone-checkbox').click()
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  // Extra 5
  it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#open-text-area').type('Realmente esta funcionando')
    .should('have.value', 'Realmente esta funcionando')
    cy.get('#open-text-area').clear().should('have.value', '')
  })

  // Extra 6
  it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('Envia o formulário com sucesso usando um comando customizado', () => {
    const data = {
      firstName: 'João',
      lastName: 'Santos',
      email: 'email@teste.com',
      longText: 'Testando o texto longo do formulário'
    }
    
    // cy.fillMandatoryFieldsAndSubmit('João Vitor', 'Santos', 'santosjoao301@gmail.com', 'Testando testando')
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')
  })
})