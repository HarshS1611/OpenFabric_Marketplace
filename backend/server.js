import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import Products from "./Routers/Product.js";
import User from "./Routers/User.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Openfabric Task Backend");
});

app.use("/products", Products);
app.use("/user", User);

mongoose
  .connect(
    process.env.CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  });
