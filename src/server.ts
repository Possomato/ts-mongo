import { Request, Response } from 'express'
import 'dotenv/config'

const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('olá mundo')
})

app.listen(port, () => console.log(`estou rodando na porta ${port}`))
