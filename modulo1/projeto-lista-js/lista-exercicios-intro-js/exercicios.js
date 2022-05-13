// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt('Digite aqui a altura')
  const largura = prompt('Digite aqui a largura')
  const area = Number(altura) * Number(largura)
  console.log(area)
  return

  // implemente sua lógica aqui
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt('Digite aqui o ano atual')
  const anoNascimento = prompt('Digite aqui o ano do seu nascimento')
  const idade = Number(anoAtual) - Number(anoNascimento)
  console.log(idade)
  // implemente sua lógica aqui
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc
  // implemente sua lógica aqui
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite aqui seu nome')
  const idade = prompt('Digite aqui sua idade')
  const email = prompt('Digite aqui seu email')
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  )

  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Digite aqui sua 1ª cor favorita')
  const cor2 = prompt('Digite aqui sua 2ª cor favorita')
  const cor3 = prompt('Digite aqui sua 3 cor favorita')
  const coresFavoritas = [cor1, cor2, cor3]
  console.log(coresFavoritas)
  // implemente sua lógica aqui
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string = prompt('Digite aqui uma informação')
  string = string.toUpperCase()
  return string
  // implemente sua lógica aqui
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  retornaPrimeiroElemento = array[0]
  return retornaPrimeiroElemento
  // implemente sua lógica aqui
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  retornaUltimoElemento = array[array.length - 1]
  return retornaUltimoElemento
  // implemente sua lógica aqui
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
