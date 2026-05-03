import express from "express"
import { signUp } from "../controller/authUsers.js"

const authRoute = express()

authRoute.post("/sign-up",signUp);

export default authRoute