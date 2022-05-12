// a. undefined
// b. null
// c. 11
// d. 3
// e.[3,19,4,5,6,7,8,9,10,11,12,13]
// f. 8
//2
// "SUBI NUM ÔNIBUS EM MIRROCOS", 26
//
// Exercício 1 -
//
let nomeUsuario = prompt('Informe seu nome')
let eMail = prompt('Informe seu e-mail')
console.log(
  `O e-mail ${eMail} foi cadastado com sucesso.Seja bem-vinda(o), ${nomeUsuario}`
)
//
//Exercício 2 -
//
let array = [
  'Churrasco',
  '\n Burrata',
  '\n Risoto',
  '\n Sopa de Capeletti',
  '\n Pizza'
]
console.log(array)
console.log(`Essas são as minhas comidas preferidas:\n ${array}`)
array[1] = prompt('Qual sua comida preferida?')
console.log(array)
//
//Exercício 3 -
//
const listaDeTarefas = []

listaDeTarefas.push(prompt('Qual a sua 1ª tarefa de hoje?'))
listaDeTarefas.push(prompt('Qual a sua 2ª tarefa de hoje?'))
listaDeTarefas.push(prompt('Qual a sua 3º tarefa de hoje?'))

console.log(listaDeTarefas)
listaDeTarefas.splice(
  prompt('Informe de 0 a 2 qual tarefa já foi realizada'),
  1
)
console.log(listaDeTarefas)
