import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  image: {
    type: String, 
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  sellerName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
});

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
