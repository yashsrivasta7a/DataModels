import mongoose from "mongoose";
const userSchma = new mongoose.Schema({
    username :{
        type : String ,
        required : true ,
        unique : true ,

    },
    email :{
        type : String ,
        required : 'Please Enter Valid Email',
        unique : true ,
        lowercase:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type : String ,
        required : true ,
        }
    
},{timespams:true})

export const User = mongoose.model("User", userSchema)
