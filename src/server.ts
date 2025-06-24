import Express, { Request, Response } from 'express'
import dotenv from 'dotenv'

import { mongoConnect } from './database/mongo'

mongoConnect()

dotenv.config()
const app = Express()

const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('olá mundo')
})

app.listen(port, () => console.log(`estou rodando na porta ${port}`))
