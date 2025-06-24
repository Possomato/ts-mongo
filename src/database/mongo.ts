import { connect } from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

export const mongoConnect = async () => {
  try{
    console.log('conectando ao MongoDb...')
    await connect(process.env.MONGO_URL as string)
    console.log('MongoDb conectado com sucesso')

  }catch(error){
    console.log('erro conexão MongoDB:', error)
  }
}