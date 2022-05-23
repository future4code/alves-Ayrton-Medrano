// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  array = array.length
  return array
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let arrayinvert = array.reverse()
  return arrayinvert
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  function ordenar(a, b) {
    return a - b
  }
  let arraySort = array.sort(ordenar)
  return arraySort
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let pares = array.filter(x => x % 2 === 0)

  return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const par = array => x % 2 === 0

  const pares = array.filter(par)
  let elevado = Number(pares ** 2)

  return elevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  function ordenar(a, b) {
    return a - b
  }
  let arraySort = array.sort(ordenar)
  let maiorNumero = arraySort[arraySort.length - 1]
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  function ordenar(a, b) {
    return a - b
  }
  let arraySort = array.sort(ordenar)
  let maiorNumero = arraySort[arraySort.length - 1]
  return maiorNumero
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
