const User=require("../models/userModel")

const loginController=async(req,res)=>{
    if(req.body.password && req.body.email){
        let user=await User.findOne( req.body).select("-password")
        if(user){
          res.send(user)
        }
        else{
          res.send({message:"no user found"})
        }
      }
      else{
        res.send({message:"no user found"})
      }
      }



const registerController=async (req,res)=>{
    try{
        const newUser=new User(req.body)
        let result=await newUser.save()
        result=result.toObject();
        delete result.password;
        res.status(200).send(result)
       }
       catch{
           res.status(400).send("error")
       }


}

module.exports={loginController,registerController}