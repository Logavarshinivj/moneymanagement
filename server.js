const express=require("express")
const cors=require("cors")
const morgan=require("morgan")
const colors=require("colors")
const dotenv=require("dotenv")
const app=express()
const path=require("path")
const connectDb=require("./config/connectDb")
dotenv.config()

//middlewares
app.use(
    cors({
      origin: 'http://localhost:4000'      
    })
  );
app.use(morgan("dev"))
app.use(express.json())

app.use("/",require("./Routes/userRoute"))

app.use("/",require("./Routes/transactionRoute"))


app.use(express.static(path.join(__dirname,'./client/dist')))

app.get("*",function(req,res){
  res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})

//databasecall
connectDb()



const PORT=4000 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server started running on port ${PORT}🔥🔥`)
})