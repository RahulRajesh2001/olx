import express from 'express'
import dotenv from 'dotenv'
import mongoConnect from './config/db.js';
import cors from 'cors'


dotenv.config()
const PORT = process.env.PORT || 5000;
const app = express()
app.use(cors());

mongoConnect()

//body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import  productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'


app.use('/api/v1',productRoutes)
app.use('/api/v1',userRoutes)


app.listen(PORT, () => {
  console.log(`Server started on the port ${PORT} `)
})
