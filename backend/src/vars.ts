import dotenv from 'dotenv'

dotenv.config()

const { env } = process

export default {
  api: {
    port:Number(env.API_PORT || env.PORT || 3004)
  }
}