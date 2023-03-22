const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
   
    email:{
        type:String,
        required:[true,"email is required and should be unique"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
    }
},

    {timestamps:true}


)

const User=mongoose.model("users",userSchema)

module.exports=User