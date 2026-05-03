import express from "express"
import userModel from "../models/usersModels/authUsers.js"
import bcrypt from "bcrypt"
import {v4 as uuidv4} from "uuid" 
import nodemailer from "nodemailer"
import otpModel from "../models/usersModels/otpSchema.js"

export const signUp = async (request, response) => {
    
    try {
        const {name, email, password, confirmPassword, phoneNumber} = request.body

        if(!name || !email || !password || !confirmPassword || !phoneNumber){
            return response.status(400).json({
                message : "Required fields are missing",
                status : false
            })
        }

        const existingUser = await userModel.findOne({email});

        if(existingUser){
            return response.status(401).json({
                message : "Email already exists",
                status : false,
                data : null
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const userObj = {
            ...request.body,
            password : hashPassword,
            confirmPassword : hashPassword
        }

        await userModel.create(userObj);


        const transporter = nodemailer.createTransport({
            service : "Gmail",
            host : "smtp.gmail.com",
            port : "465",
            secure : true,
            auth : {
                user : process.env.EMAIL,
                pass : process.env.APP_PASS
            }
        })

        const OTP = uuidv4().slice(0, 6);
        console.log(OTP);

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Your OTP is",
            html: `
          <div style="font-family: Arial; background:#f4f4f4; padding:20px;">
            <div style="max-width:400px; margin:auto; background:#fff; padding:20px; border-radius:8px; text-align:center;">
              <h2 style="color:#333;">Verify Your Email</h2>
              <p>Your OTP code is:</p>
              <a 
                style="
                  display:inline-block;
                  padding:12px 24px;
                  background:#4CAF50;
                  color:#fff;
                  text-decoration:none;
                  font-size:18px;
                  border-radius:6px;
                  margin:10px 0;
                "
              >
                ${OTP}
              </a>
              <p style="font-size:12px;color:#777;">This code will expire in 5 minutes.</p>
            </div>
          </div>
        `,
          });
      
          const otpObj = {
            email,
            otp: OTP,
          };
      
          await otpModel.create(otpObj);
      
          const reqData = {
            name,
            phoneNumber,
            email,
          };


        response.status(200).json({
            message : "Account created successfully!",
            status : true,
            data : reqData
        });

    } catch (error) {
        response.status(500).json({
            message : error.message || "Internal server error ",
            status : false,
        })
    }

}