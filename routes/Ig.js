const express = require("express");
const router = express.Router()
const mysql = require("mysql")

const connectDB = require("../config/db")
;
console.log(connectDB)
router.get('/', function(req,res) {
    var query="select * from ingredients ";
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