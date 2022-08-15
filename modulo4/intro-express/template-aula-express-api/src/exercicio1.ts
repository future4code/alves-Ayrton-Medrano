import express, {Request, Response} from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

// Ex 1
app.listen(3003, () => {
    console.log("Servidor rodando em http://localhost:3003")
})

app.get('/', (req: Request, res: Response) => {
    res.send("Hello from Express!")
})

// Ex 2
type UserType = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

// Ex 3

const user1 : UserType = {
    id: 1,
    name: "Ayrton",
    phone: "11999998888",
    email: "ayrtonmedrano@labenu.com",
    website: "ayrtonmedrano.com.br"
}

const user2 : UserType = {
    id: 2,
    name: "Barbara",
    phone: "11989898989",
    email: "barbaracal@gmail.com",
    website: "vetbarbara.com.br"
}

const user3 : UserType = {
    id: 3,
    name: "Oscar",
    phone: "11976373637",
    email: "oscargatolindo@gmail.com",
    website: "oscarmiau.com.br"
}

const usersList: UserType[] = [user1, user2, user3]

app.post("/users", (req: Request, res: Response) => {
    console.log("chave body =", req.body.chave)
    console.log("name body =", req.body.name)
    console.log("numbers body =", req.body.numbers)
    if(req.body.chave === "key"){
        res.send("O valor da chave é igual a key")
    } else {
        res.send("O valor da chave não é igual a key")
    }
})
