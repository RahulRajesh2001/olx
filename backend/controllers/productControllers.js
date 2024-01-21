import ProductModel from '../model/productModel.js'

//Get all product for --users
export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find()
    res.json({ products })
  } catch (err) {
    console.err('Error from fetching data', err)
    res.status(500).json({message:"Error occured from fetching product"})
  }
}

//Add products --users
export const addProducts = async (req, res) => {
  try {
    const { name, image, price, category, date, sellerName, phoneNumber } =
      req.body;

    const product = new ProductModel({
      name,
      image,
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
    res.status(500).json({ message: 'Error occured' });
  }
}
