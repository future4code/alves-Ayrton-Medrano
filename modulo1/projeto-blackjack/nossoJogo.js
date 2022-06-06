/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log('Bem vindo ao jogo de Blackjack')
let confirmacao = confirm(`Quer iniciar uma nova rodada?`)

if (confirmacao) {
  let carta1 = comprarCarta()
  let carta2 = comprarCarta()
  let carta3 = comprarCarta()
  let carta4 = comprarCarta()

  let pontosUser = carta1.texto + carta2.texto
  let pontosMaquina = carta3.texto + carta4.texto

  console.log(
    `Usuário - cartas = ${(carta1.valor, carta2.valor)} - ${pontosUser}`
  )
  console.log(
    `Usuário - cartas = ${(carta3.valor, carta4.valor)} - ${pontosMaquina}`
  )

  if (pontosUser > pontosMaquina) {
    console.log(`O usúario ganhou!`)
  } else if (pontosUser < pontosMaquina) {
    console.log(`O computador perdeu`)
  } else {
    ;('Empate!')
  }
}
