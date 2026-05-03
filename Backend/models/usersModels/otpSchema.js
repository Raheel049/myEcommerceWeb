import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },

    otp : {
        type : String,
        required : true,
        isActve : false
    }
}, {timestamps : true});

const otpModel = mongoose.model("otpCollcetion", otpSchema);

export default otpModel