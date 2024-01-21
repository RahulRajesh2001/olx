import express from 'express'

import {
  getAllProducts,
  addProducts,
} from '../controllers/productControllers.js'

const router = express.Router()

router.get('/', getAllProducts)
router.post('/addProduct', addProducts)

export default router
