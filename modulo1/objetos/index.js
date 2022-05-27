// Exercicios de interpretação
//
// 1-
// a) Matheus Nachtergaele
//    Virginia Cavendish
//    Globo, 14h
//
// 2-
// a) nome: Juca, idade: 3, raça: SRD
//    nome: Juba, idade: 3, raça: SRD
//    nome: Jubo, idade: 3, raça: SRD
// b) As reticências indica que o objeto informado será copiado/espelhado de outro objeto.
//
// 3-
// a) Vai ser impresso o valor false pois é o valor que consta na chave "backender"
// b) Vai ser impresso null pois não existe uma chave de altura.

//---------------------------------------------------------------------------

// function minhaFuncao(objeto, propriedade) {
//   return objeto[propriedade]
// }
// console.log(minhaFuncao('teste', 3))
//----------------------------------------------------------------------------

//Exercício 1-
//a)
const nomes = {
  nome: 'Óscar',
  apelidos: ['Gatão', 'Dorminhoco', 'Esfomeado']
}
console.log(
  `Eu sou o ${nomes.nome}, mas pode me chamar de: ${nomes.apelidos[0]}, ${nomes.apelidos[1]} ou ${nomes.apelidos[2]}.`
)
// b)
const novaLista = {
  ...nomes,
  apelidos: ['Mimado', 'Ligeiro', 'Bonzinho']
}
console.log(novaLista)
console.log(
  `Eu sou o ${novaLista.nome}, mas pode me chamar de: ${novaLista.apelidos[0]}, ${novaLista.apelidos[1]} ou ${novaLista.apelidos[2]}.`
)
//
// Exercício 2-
// a)
const form1 = {
  nome: 'Ayrton',
  idade: 27,
  profissao: 'Desenvolvedor'
}
const form2 = {
  nome: 'Bárbara',
  idade: 24,
  profissao: 'Veterinária'
}
// b)
function transformando(transf1) {
  const retorna1 = `${transf1.nome}, ${transf1.nome.length}, ${transf1.idade}, ${transf1.profissao}, ${transf1.profissao.length}`

  return retorna1
}
const formatando = transformando(form1)
const formatando2 = transformando(form2)
console.log(formatando)
console.log(formatando2)
//
// Exercício 3-
// a)
const carrinho = []
// b)
const fruta1 = {
  nome: 'Banana',
  disponibilidade: true
}
const fruta2 = {
  nome: 'Abacate',
  disponibilidade: true
}
const fruta3 = {
  nome: 'Figo',
  disponibilidade: true
}
// c)
function frutas(fruta) {
  carrinho.push(fruta)
  return carrinho
}
const frutaPronta1 = frutas(fruta1)
const frutaPronta2 = frutas(fruta2)
const frutaPronta3 = frutas(fruta3)
// d)
console.log(frutaPronta1[0])
console.log(frutaPronta2[1])
console.log(frutaPronta3[2])
//------------------------------------------------------------------
//Desafios
//1-
//

const pergunta1 = prompt('Digite aqui seu nome')
const pergunta2 = prompt('Digite aqui sua idade')
const pergunta3 = prompt('Digite aqui sua profissao')
function dados(nome, idade, profissao) {}

const nome1 = {
  nome: pergunta1,
  idade: pergunta2,
  profissao: pergunta3
}
console.log(
  `nome: ${nome1.nome}, profissao: ${nome1.profissao}, idade: ${nome1.idade}`
)
//
//2-
//
const primeiroFilme = {
  anoDeLancamento: 2022,
  nome: 'Os segredos de Dumbleodore'
}
const segundoFilme = {
  anoDeLancamento: 2011,
  nome: 'As Reliquias da morte: pt2'
}

function filmes(filme1, filme2) {
  let comparacao2 = filme1 < filme2
  return comparacao2
}
const comparacao1 = filmes(primeiroFilme, segundoFilme)
console.log(`O primeiro filme foi lançado antes do segundo?`, comparacao1)
console.log(
  `O primeiro filme foi lançado no mesmo ano do segundo?`,
  comparacao1
)
//
//3-
// const carrinho = []

// const fruta1 = {
//   nome: 'Banana',
//   disponibilidade: true
// }
// const fruta2 = {
//   nome: 'Abacate',
//   disponibilidade: true
// }
// const fruta3 = {
//   nome: 'Figo',
//   disponibilidade: true
// }

// function frutas(fruta) {
//   carrinho.push(fruta)
//   return carrinho
// }
// const frutaPronta1 = frutas(fruta1)
// const frutaPronta2 = frutas(fruta2)
// const frutaPronta3 = frutas(fruta3)

// console.log(frutaPronta1[0])
// console.log(frutaPronta2[1])
// console.log(frutaPronta3[2])

// function frutaInvertida(frutaReverse) {
//   frutaReverse = !frutaReverse
//   return frutaReverse
// }
// const disponibilidade1 = frutaInvertida(fruta1)
// const disponibilidade2 = frutaInvertida(fruta2)
// const disponibilidade3 = frutaInvertida(fruta3)
// console.log(disponibilidade1)
// console.log(disponibilidade2)
// console.log(disponibilidade3)
