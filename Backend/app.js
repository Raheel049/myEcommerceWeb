import dotenv from "dotenv"
dotenv.config();
import express from "express";
import { dbConnect } from "./config/db.js";
import authRoute from "./routes/authUserRoute.js";
import cors from "cors"
import adminRoutes from "./routes/adminRoutes.js";
import upload from "./middleware/multer.js";


const app = express();
const port = 5000


dbConnect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.post("/test-api",(req, res) => {
    res.send("Api his success");
})

app.use("/api/user",authRoute);
app.use("/api/admin", upload.single('image'), adminRoutes);


app.listen(port, () => console.log("Server Running on port 5000"));