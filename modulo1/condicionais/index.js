//
// Exercicios de interpretação
// 1-
// a) O código verifica se o resto da divisão de um numero x, escolhido pelo usuário é igaul a 0, se sim ele imprime "Passou no teste." no console e se não imprime no console "Não passou no teste."
// b) Ele imprime "Passou no teste" para números positivos.
// c) Ele imprime "Não passou no teste" para números ímpares.
//
// 2-
// a) O código serve para retornar o preço da fruta que for digitada pelo usuário no prompt.
// b) preco = 2.25
// c) Ele imprimiria o valor do default
//
// 3-
// a) A primeira linha criou uma variável, que recebe o valor de uma string em forma de número pelo prompt e o converte em number antes de armazenar.
// b) Quando inserido o número 10 a mensagem do terminal será "Esse número passou no teste"; já o número -10 inserido não vai retornar valor algum pois a função tras apenas uma condição.
// c) Haverá um erro pois está faltando o else para a segunda condição.
//
// Exercicios de escrita
// 1-
// a)
const idade = prompt('Digite aqui sua idade')
// b )
Number(idade)
// c)
function maioridade(dirigir) {
  if (dirigir >= 18) {
    console.log('Você pode dirigir')
  } else {
    console.log('Você não pode dirigir')
  }
}
maioridade(idade)

//2-
const turno = prompt(
  'Informe seu turno, M para Matutino/ V para Vespertino/ N para Noturno'
).toLowerCase()
function turnoAula(aula) {
  if (aula === 'm') {
    console.log('Bom Dia!')
  } else if (aula === 'v') {
    console.log('Boa Tarde!')
  } else {
    console.log('Boa Noite!')
  }
}
turnoAula(turno)
//3-
const horarioDeaula = prompt(
  'Informe seu turno, M para Matutino/ V para Vespertino/ N para Noturno'
).toLowerCase()
function turnoUsuario(turno2) {
  switch (turno2) {
    case 'm':
      console.log('Bom Dia!')
      break

    case 'v':
      console.log('Boa Tarde!')
      break
    default:
      console.log('Boa Noite!')
  }
}
console.log(horarioDeaula)
turnoUsuario(horarioDeaula)

//4-
const genero = prompt('Qual o genêro do filme que vai assistir?')
  .toLowerCase()
  .trim()
const preco = Number(prompt('Qual o preço do filme que vai assistir?'))
function filmeAlone(g, p) {
  if (genero === 'fantasia' && preco < 15) {
    console.log('Bom filme')
  } else console.log('Escolha outro filme :(')
}
filmeAlone(genero, preco)

// Desafios
// 1-
// const genero = prompt('Qual o genêro do filme que vai assistir?')
//   .toLowerCase()
//   .trim()
// const preco = Number(prompt('Qual o preço do filme que vai assistir?'))
// function filmeAlone(g, p) {
//   if (genero === 'fantasia' && preco < 15) {
//     const snack = prompt('Qual snack você vai comprar?')
//     console.log(`Bom filme e aproveite seu ${snack}`)
//   } else console.log('Escolha outro filme :(')
// }
// filmeAlone(genero, preco)
// 2-
