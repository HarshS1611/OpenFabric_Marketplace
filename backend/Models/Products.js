import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  imageurl: String,
  category: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
