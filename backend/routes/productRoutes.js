import express from 'express'
import { authenticateUser } from '../utils/authMiddleware.js'


import {
  getAllProducts,
  addProducts,
} from '../controllers/productControllers.js'

const router = express.Router()

router.get('/products',authenticateUser,getAllProducts)
router.post('/addProduct',addProducts)

export default router
