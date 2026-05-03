import mongoose from "mongoose";

export const dbConnect = () => {
    const URI = process.env.DB_URI

    mongoose.connect(URI)
    .then(() => console.log("DataBase COnnected SuccessFully"))

    .catch((error) => console.log(error || "Data Base Not Connected"));
}