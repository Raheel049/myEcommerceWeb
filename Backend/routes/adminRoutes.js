import express from "express";
import { addProduct, fetchAllProducts } from "../controller/Admin/productController.js";

const adminRoutes = express();

adminRoutes.post("/add-product", addProduct);

adminRoutes.get("/all-products", fetchAllProducts);

export default adminRoutes

