export type Products = {
  id:string, name:string, price:number
}

export const productsList: Array <Products> = [
{
  name : "Sabão em pó Omo",
  id : (Date.now()).toString(),
  price :20
},
{
  name : "Amaciante de Roupas Ypê",
  id : (Date.now()).toString(),
  price :12
},
{
  name : "Detergente Ypê",
  id : (Date.now()).toString(),
  price : 5
}

]