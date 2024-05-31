import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
    {
        content :{
            type : String ,
            required : true,
        },
        
        complete:{
            type: Boolean ,
            default : false,
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
},
{
    timestamps:true
}
) // schema creation

export const subtodo = mongoose.model("subtodo" , subTodoSchema) 