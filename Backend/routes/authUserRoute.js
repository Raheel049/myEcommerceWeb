import express from "express"
import { login, signUp } from "../controller/authUsers.js"

const authRoute = express()

authRoute.post("/sign-up",signUp);

authRoute.post("/log-in", login);

export default authRoute