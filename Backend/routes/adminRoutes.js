import express from "express";
import { addProduct } from "../controller/Admin/productController.js";

const adminRoutes = express();

adminRoutes.post("/add-product", addProduct)

export default adminRoutes

