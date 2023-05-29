import express from "express";
import mongoose from "mongoose";

const router = express.Router();

import Product from "../Models/Products.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProductbyId = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product details" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = req.body;
    const productDetail = new Product({
      ...product,
      creator: req.userId,
      createdAt: new Date().toISOString(),
    });
    const newProduct = await productDetail.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, price, description, creator, category, imageurl } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No product with id: ${id}`);

    const updatedProduct = {
      name,
      price,
      description,
      creator,
      category,
      imageurl,
      _id: id,
    };
    await Product.findByIdAndUpdate(id, updatedProduct);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    await Product.findByIdAndRemove(id);
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default router;
