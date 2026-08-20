import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

const app = express()
app.use(express.json())
app.use(cors())

app.post('/usuarios', async (req, res) => {
    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })
    res.status(201).json(req.body)
})

app.get('/usuarios', async (req, res) => {
    let users

    if (req.query) {
        const where = {}
        if (req.query.name) {
            where.name = req.query.name
        }
        if (req.query.email) {
            where.email = req.query.email
        }
        if (req.query.age) {
            where.age = parseInt(req.query.age)
        }
        users = await prisma.user.findMany({ where })
    } else {
        users = await prisma.user.findMany()
    }
    
    res.status(200).json(users)
})

app.put('/usuarios/:id', async (req, res) => {
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })
    res.status(201).json(req.body)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }    
    })
    res.status(200).json({message: 'Usuário deletado com sucesso!'})
})

app.listen(3000)