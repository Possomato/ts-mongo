import { Request, Response } from 'express'

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req: Request, res: Response) => {
  res.send('olá mundo')
})

app.listen(port, () => console.log(`estou rodando na porta ${port}`))
