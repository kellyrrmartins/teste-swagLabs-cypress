///<reference types="cypress"/>

describe('Teste de ponta a ponta em sawag labs', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Deve fazer o pedido de ponta a ponta', () => {
    // Login
    cy.fazerLogin('standard_user', 'secret_sauce')

    // Adicionar produto
    cy.adicionarProduto('Sauce Labs Backpack')
    cy.adicionarProduto('Sauce Labs Bike Light')
    cy.adicionarProduto('Sauce Labs Onesie')

    cy.get('.shopping_cart_link').click()

    cy.get('[data-test="checkout"]').click()

    // cadastro
    cy.cadastro('Kelly', 'Martins', '18210-000')

    // finalizar Compra

    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
  })
})
