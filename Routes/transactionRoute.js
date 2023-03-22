const express=require("express")
const {addTransaction,getAllTransaction,delTransaction,updateTransaction,getTransactionById}=require("../controllers/transcontroller")



const router=express.Router()


router.post("/add-transaction",addTransaction)

router.post("/get-transaction",getAllTransaction)

// router.delete("/delete-transaction",delTransaction)

router.delete("/get-transaction/:id",delTransaction)

router.put("/update-transaction/:id",updateTransaction)

router.get("/get-transaction/:id",getTransactionById)


module.exports=router