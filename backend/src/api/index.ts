import express from 'express'

const api = express()
//req middleware
api.use(express.json())
api.use(express.urlencoded({ extended:true }))
//routes
api.get('./',(_req, res) => res.send())

//req midlewares

export default api