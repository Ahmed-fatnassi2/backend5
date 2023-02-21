// const express = require("express")
// const router = express.Router()
// const ProdControler = require("../api/ProdControler")


// router.get("/test", ProdControler.test);
// router.post("/", (req, res) => {
//     res.send({ data: " prod" });
// });
// router.delete("/", (req, res) => {
//     res.send({ data: " prod" });
// });

// module.exports = router;

// http://localhost:5000/prod/test

const express = require("express");
const router = express.Router()
const mysql = require("mysql")

const connectDB = require("../config/db")
;
console.log(connectDB)
router.get('/', function(req,res) {
    var query="select * from product ";
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
router.put('/:id', (req,res)=>{
    const data = [req.body.price,req.params.id];
    connectDB.query("UPDATE product SET price = ? where id_product = ?",data,(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send(result);
        }
    })
});

module.exports = router;