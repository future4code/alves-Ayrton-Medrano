import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import app from './app'
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserbyId'
import editUser from './endpoints/editUser'
import createTask from './endpoints/createTask'
import getTaskById from './endpoints/getTaskById'
import getAllUsers from './endpoints/getAllUsers'


//1
app.post('/user',createUser)

//2
app.get("/user/:id", getUserById)

//3
app.put("/user/edit/:id", editUser)

//4
app.post("/task", createTask)

//5
app.get("/task/:id", getTaskById)

//6
app.get("/user/all", getAllUsers)