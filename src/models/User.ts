import { Schema, model, connection } from 'mongoose'

type UserType = {
  email: string
  age: string
  name: {
    firstName: string
    lastName: string
  }
  interests: [string]
}

const schema = new Schema<UserType>({
  email: { type: String, required: true },
  age: String,
  interests: [String],
  name: {
    firstName: String,
    lastName: String,
  },
})

const modelName = 'User'

export default connection && connection.models[modelName]
  ? connection.models[modelName]
  : model<UserType>(modelName, schema)
