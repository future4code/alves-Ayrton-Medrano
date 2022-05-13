// Exercicios de interpretação
// 1-
// a) 10 e 50
// b) Não apareceria nada
// 2-
// a) Essa função trasforma o texto inserido pelo usuario no prompt todo em letras minúsculas e procura pela palavra "cenoura", caso a frase tenha a palavra ela retorna true no console, do contrário retorna false.
// b)i. true
//   ii. true
//   iii. false
//
// Exercícios de Escrita
//
// 1-
const fraseOriginal =
  'Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.'

function trocar(fraseAdaptada) {
  fraseAdaptada = fraseAdaptada.replaceAll('Caio', 'Ayrton')
  fraseAdaptada = fraseAdaptada.replaceAll('23', '27')
  fraseAdaptada = fraseAdaptada.replaceAll('São Paulo', 'São Paulo, capital')
  fraseAdaptada = fraseAdaptada.replaceAll('estudante', 'estudante')

  return fraseAdaptada
}
const novaFrase = trocar(fraseOriginal)
console.log(novaFrase)

//
// Exercício 2
//a)
function numero(number1, number2) {
  number1 = Number(10)
  number2 = Number(5)
  return number1, number2
}

const soma = number1 + number2
console.log(soma)

//
// Exercício 3
//
