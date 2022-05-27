// Exercicios de interpretação
// 1- O novoArray vai mostrar o conteúdo da array quebrada em linhas, seguida do indice/poisção na array e por ultimo vai mostrar a array em formato de lista.
//
// 2- O novoArrayB irá imprimir no console apenas o primeiro item, no caso o nome de cada dado da array pois foi o que foi pedido no return.
//
// 3- O novoArrayC irá filtrar no array usuarios procurando todos os elementos que sejam diferentes de "Chijo", essa por sua vez será a unica não mostrada no console
//
// Exercicios de escrita de código
// 1-
const pets = [
  { nome: 'Lupin', raca: 'Salsicha' },
  { nome: 'Polly', raca: 'Lhasa Apso' },
  { nome: 'Madame', raca: 'Poodle' },
  { nome: 'Quentinho', raca: 'Salsicha' },
  { nome: 'Fluffy', raca: 'Poodle' },
  { nome: 'Caramelo', raca: 'Vira-lata' }
]
// a)
const nomeDoguinhos = pets.map((item, index, array) => {
  return item.nome
})
console.log(nomeDoguinhos)
// b)
const somenteSalsicha = pets.filter((item, index, array) => {
  return item.raca === `Salsicha`
})
console.log(somenteSalsicha)
// c)
const descontoTosa = pets
  .filter(desconto => {
    return desconto.raca === `Poodle`
  })
  .map(desconto => {
    return `Você ganhou um cumpom de desconto de 10% para tosar o/a ${desconto.nome}`
  })
console.log(descontoTosa)

const produtos = [
  { nome: 'Alface Lavada', categoria: 'Hortifruti', preco: 2.5 },
  { nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8 },
  { nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.6 },
  { nome: 'Dúzia de Banana', categoria: 'Hortifruti', preco: 5.7 },
  { nome: 'Leite', categoria: 'Bebidas', preco: 2.99 },
  { nome: 'Cândida', categoria: 'Limpeza', preco: 3.3 },
  { nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2 },
  { nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55 },
  { nome: 'Berinjela kg', categoria: 'Hortifruti', preco: 8.99 },
  { nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8 }
]

// 2-
// a)
const somenteNome = produtos.map((item, index, array) => {
  return item.nome
})
// b)
const itensDescontados = produtos.map(produt => {
  const novoObj = {
    nome: produt.nome,
    preco: produt.preco - (produt.preco * 5) / 100
  }
  return novoObj
})
console.log(itensDescontados)
// c)
let produtoBebidas = produtos.filter(produtob => {
  return produtob.categoria === 'Bebidas'
})
console.log(produtoBebidas)
//
// d)
// const ype = produtos.map(prod => {
//   return prod.nome
// })
// console.log(ype.includes('Ypê'))
// e)
