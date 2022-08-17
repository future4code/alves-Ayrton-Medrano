import express, { Request, Response } from "express";
import cors from "cors";
import { productsList, Products } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

//Ex1
app.get('/test',(req: Request, res: Response) => {
    res.send("Testada")
})

//Ex3
app.post('/addProducts',(req: Request, res: Response) => {
    try {
        
        const {name,price} = req.body

        if (!productsList){ throw new Error("Adicione os campos do produto")}
        productsList.push({
            id: (Date.now()).toString(),
            name,
            price
        })

        
    } catch (error:any) {
        res.status(res.statusCode|| 500).send(error.message)
        
    }
        res.send(productsList)

})

//Ex4

app.get('/allProducts',(req: Request, res: Response)=>{
    res.send(productsList)

})
//Ex5
app.put('/addProducts/:id',(req: Request, res: Response)=>{
    try {
    const id =req.params.id
    const {price}= req.body

    const findIndex = productsList.findIndex((product)=> {product.id === id, console.log(product.id),console.log(id)})
    
    productsList[findIndex].price = price

    res.send(productsList)
        
    } catch (error:any) {
        res.status(404).send(error.message)
        
    }

})
// //Ex6
// app.delete('productsList/delete/:id', (req: Request, res:Response) => {
//     const id = req.params.id
    

//     const deleteProduct = productsList.filter(())

// })


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

