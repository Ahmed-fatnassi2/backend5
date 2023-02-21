// const express = require("express");
// const router = express.Router()

// router.get("/", (req, res)=>{
//     res.send({data:" order_c_p"});
// });
// router.post("/", (req, res)=>{
//     res.send({data:" order_c_p"});
// });

// module.exports = router;
const express = require("express");
const router = express.Router()
const mysql = require("mysql")

const connectDB = require("../config/db")
;
console.log(connectDB)
router.get('/', function(req,res) {
    var query="select * from order_detail_preference";
 
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