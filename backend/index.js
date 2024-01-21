import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import mongoConnect from './config/db.js';


dotenv.config()
const PORT = process.env.PORT || 5000;
const app = express()

mongoConnect()
//body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

import  productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'


app.use('/api/v1',productRoutes)
app.use('/api/v1',userRoutes)


app.listen(PORT, () => {
  console.log(`Server started on the port ${PORT} `)
})

