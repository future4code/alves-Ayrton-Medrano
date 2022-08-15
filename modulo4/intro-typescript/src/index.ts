
let a : number = 3

let b : number = 4

let c : number = 5


function checaTriangulo(a, b, c) {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}