import mongoose, { mongo } from "mongoose";
const orderItemSchema = new mongoose.Schema({
    productID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type: Number,
        requried:true,
    }
})
const oderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    category :{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    oderItems:{
        type:[orderItemSchema]
    },
    address:
        [{
            houseNo:{
                type:Number ,
                required:true
            },
            pincode:{
                type:Number,
                required:true,
            },
            houseAddress:{
                type:String,
                requried:true,
            }
        }],
        status:{
            type:String,
            enum:["Pending","Shipped","Cancelled"],
            default :"Pending",
        }

},{timestamps:true})
export const order = mongoose.model("Order",oderSchema)