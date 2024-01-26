import ProductModel from '../model/productModel.js'
import { v2 as cloudinary } from 'cloudinary'
import DatauriParser from 'datauri/parser.js'
import path from 'path';



const parser=new DatauriParser()
cloudinary.config({
  cloud_name: 'dztburkwy',
  api_key: '182133815614938',
  api_secret: 'qz7-w8D4LZo3IV02cHqDEQRsqBs',
})

// Get all products for users
export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find()
    res.json({ products })
  } catch (err) {
    console.error('Error fetching data', err)
    res.status(500).json({ message: 'Error occurred while fetching products' })
  }
}

export const addProducts = async (req, res) => {
  try {
    const { name, price, category, date, sellerName, phoneNumber } = req.body;

    // Parsing the buffer
    const extName = path.extname(req.file.originalname).toString();
    const file64 = parser.format(extName, req.file.buffer);

    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(file64);

    console.log("Cloudinary response:", result);

    const product = new ProductModel({
      name,
      image: result.url, 
      price,
      category,
      date,
      sellerName,
      phoneNumber,
    });

    await product.save();

    res.status(201).json({ message: 'Product added successfully' });
  } catch (err) {
    console.error('Error adding a product', err);
    res.status(500).json({ message: 'Error occurred while adding a product' });
  }
};
