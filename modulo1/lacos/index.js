//
// Exercicios de Interpretação
// 1-O código está somando todos os resultados do loop executado do principio 0 até o número 4.
//
// 2-
// a) Será impresso os valores: 19,21,23,25 e 30
// b) Não, precisaria usar o indexOf para conseguir listar os indices da array.
//
// 3-
// O console imprimiria até o número 4 = "****" Um asterisco para cada loop dado.
//
// Exercicios de escrita
// 1-
// a)
let pets = prompt('Quantos pets você tem?')
if (pets < 1) {
  console.log('Que pena! Mas você pode adotar um pet')
}
// b)
else if (pets >= 1) {
  let quantosPets = []
  while (quantosPets.length < pets) {
    let petNome = prompt('Digite o nome do seu pet')
    // c)
    quantosPets.push(petNome)
  }
  console.log(quantosPets)
}
//
// 2-
// a)
let arrayOriginal = [5, 4, 6, 8, 9, 78, 21]
for (let imprimir of arrayOriginal) {
  console.log('Exercicio A', imprimir)

  // b)

  console.log('Exercicio B', imprimir / 10)
}
//  c)
let novoArray = []
for (let pares of arrayOriginal) {
  if (pares % 2 === 0) {
    novoArray.push(pares)
  }
}
console.log('Exercicio c', novoArray)
// d)
// e)
