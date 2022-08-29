import { Request, Response } from 'express'
import app from './app'
import connection from './connection';
import { BASE_URL } from './BASE_URL';
import axios from "axios"

// Exercício 1 e 2
// a) '/subscribers'
// b) Promise<any[]>
// c)
// const getSubscribers = async () : Promise<any[]> => {
//     const response = await axios.get(`${BASE_URL}/subscribers`)

//     return response.data
// }

// Exercício 3
// a) Não.
// b) ?
// c) 

type User = {
    id: string;
    name: string;
    email: string
}

const getSubscribers = async (): Promise<User[]> => {
    const response = await axios.get(`${BASE_URL}/subscribers`)

    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}

// Ex

const news = {
    title: "Lorde das Trevas retorna",
    content: "Ministro da magia e aurores viram com os próprios olhos a volta daquele que não se deve nomear.",
    date: Date.now()
}

type News = {
    title: string,
    content: string,
    date: number
}

const createNews = async (news: News): Promise<void> => {

    await axios.put(`${BASE_URL}/news`, news)
}

// Ex 5

const sendNotifications = async (users: User[], message: string): Promise<void> => {

    try {
        for (const user of users) {
            await axios.post(`${BASE_URL}/notifications`, {
                subscriberId: user.id,
                message
            });
            console.log(`Nótificação enviada a ${user.name}`)
        }
        console.log("All notifications sent");
    } catch {
        console.log("Error");
    }
}
const main = async () => {
    try {
        createNews(news)
        const subscribers = await getSubscribers()
        console.log(subscribers)
    } catch (error: any) {

    }

}

main() 
