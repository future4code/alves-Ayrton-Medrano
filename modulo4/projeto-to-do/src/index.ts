import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import app from './app'
import createUser from './endpoints/createUser'

app.post('/user',createUser)