const Transaction=require("../models/transactionModel")
const moment=require("moment")

const getAllTransaction=async(req,res)=>{
    try{
        const {frequency,selectType}=req.body
       const transaction=await Transaction.find({
       
        // userid: req.body.userid,
        // ...(frequency)
        date:{
            $gt:moment().subtract(Number(frequency),"d").toDate()
        },
        ...(selectType!=="all" && {selectType}),

       })
       res.send(transaction)

    }
    catch{
        console.log("error")
        res.send("Error")
    }

}

// const addTransaction=async(req,res)=>{
//     try{
//     const newTransaction=new Transaction(req.body)
//     await newTransaction.save()
//     res.status(200).send("Transaction created")
//     }
//     catch{
//         console.log("error")
//         res.status(400).send("Error")
//     }

// }

const addTransaction=async(req,res)=>{

    // try {
        const { amount,type,category,description,date,userid} =req.body;
        console.log(req.body);

        const newTransaction = await Transaction.create({
            amount,type,category,description,date,userid
        });
        res.send(newTransaction);
    //   } 
    //   catch (err) {
    //     res.status(404).send({ message: "error" });
    //   }
    // };

    }

const delTransaction=async(req,res)=>{
    const result = await Transaction.deleteOne({ _id: req.params.id });
    res.send(result);   
}



const updateTransaction= async function (request, response) {
    const result = await Transaction.updateOne(
      { _id: request.params.id },
      { $set: request.body }
    );
    response.send(result);
  };


const getTransactionById=async function (request,response) {

    const result = await Transaction.findOne({ _id: request.params.id });
  if (result) {
    response.send(result);
  } else {
    response.send({ message: "no such record" });
  }
};






module.exports={getAllTransaction,addTransaction,delTransaction,updateTransaction,getTransactionById}


