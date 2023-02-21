// const express = require("express");
// const router = express.Router()

// router.get("/", (req, res)=>{
//     res.send({data:" prd_ig"});
// });
// router.post("/", (req, res)=>{
//     res.send({data:" prd_ig"});
// });

// module.exports = router;

const express = require("express");
const router = express.Router()
const mysql = require("mysql")

const connectDB = require("../config/db")
;
console.log(connectDB)
router.get('/', function(req,res) {
    var query="select * from product_ingredients ";
    connectDB.query(query, function(err, result){
        if(err){
            console.log(err);
            res.send("unable to get the products")
        }
        else{
            res.send(result);
        }
    })
})
module.exports = router;