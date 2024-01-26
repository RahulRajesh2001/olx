import express from 'express'
import { authenticateUser } from '../utils/authMiddleware.js'
import multer from 'multer'



const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

import {
  getAllProducts,
  addProducts,
} from '../controllers/productControllers.js'

const router = express.Router()

router.get('/products',authenticateUser,getAllProducts)
router.post('/addProduct',authenticateUser,upload.single('file'),addProducts)

export default router
