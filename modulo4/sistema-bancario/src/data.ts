
type Balance = {
  description: string,
  value: number,
  date: string,
}

type Acount = {
  name: string,
  cpf: number,
  birthdate: string,
  balance: Balance [] ,

}

export const accountData: Acount[]= [
{
  name: 'José Luis',
  cpf: 11122233344,
  birthdate:"18/05/1964",
  balance: [],
},
{
  name:"Caio Couto",
  cpf: 22233344455,
  birthdate:"18/06/1988",
  balance:[],
},
{
  name:"Murilo Tauro",
  cpf:33344455566,
  birthdate:"02/03/1999",
  balance:[],
}

]