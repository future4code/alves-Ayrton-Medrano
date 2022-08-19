import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {accountData} from './data'

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post('/users',(req:Request ,res:Response )=>{
  let codeError: number= 400
  try {
    const {name,cpf,birthdate,balance} = req.body
    // if (){
    //   codeError: 404
    //   throw new Error("Tem que ser maior de idade")
    // }
      accountData.push({
        name,
        cpf,
        birthdate,
        balance,
      })


  } catch (error:any) {
    res.status(codeError).send(error.message)
    
  }
  res.send(accountData)

})

app.get('/users', (req, res) => {
  res.send(accountData)
})

const server = app.listen(3003, () => {
  console.log(`Server is running in http://localhost:3003`);
});