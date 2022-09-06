import {Request, Response  } from "express";
import sendUser from "../data/sendUser";

export default async function createUser(
  req: Request,
  res: Response
){
  try {
    if(
        !req.body.name ||
        !req.body.nickname ||
        !req.body.email
    ){res.status(400).send("Campos não podem ser vazios")}

    const id: string = Date.now().toString()

    await sendUser(
        id,
        req.body.name, 
        req.body.nickname, 
        req.body.email
    )
    {res.status(200).send("Usuário criado com sucesso")}
  } catch (error:any) {
    res.status(404).send(error.message)
  }

}