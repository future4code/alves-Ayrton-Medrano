// 2-
// a)
// Exercício 2

// a)

// function obterEstatisticas(numeros:number[]):string[]  | number | any {

//   const numerosOrdenados:number[] = numeros.sort(
//       (a:any, b:any):number => a - b
//   )

//   let soma:number = 0

//   for (let num of numeros) {
//       soma += num
//   }

//   type Estatistica = {
//       maior: number,
//       menor: number,
//       media: number
//   }

//   const estatisticas: Estatistica = {
//       maior: numerosOrdenados[numeros.length - 1],
//       menor: numerosOrdenados[0],
//       media: soma / numeros.length
//   }

//   return estatisticas
// }

// // console.log(obterEstatisticas([10,20,30,40,50]))

// // b)
// // estatisticas é um objeto com tres variáveis dentro, sendo as três number.
// // soma é uma variável do tipo number.
// // numerosOrdenados é do tipo array de números.

// // c)

// // type Estatistica = {
// //   maior: number,
// //   menor: number,
// //   media: number
// // }

// // type amostraDeIdades = {

// //   numeros: number[],
// //   obterEstatisticas: (numeros:number[]) => Estatistica
  
// // };

// // const jogos:amostraDeIdades = {
// //   numeros: [10,20,30],
// //   obterEstatisticas
// // }
