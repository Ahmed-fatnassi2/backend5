// const express = require("express");
// const router = express.Router()

// router.get("/", (req, res)=>{
//     res.send({data:" cat"});
// });
// router.post("/", (req, res)=>{
//     res.send({data:" cat"});
// });
// router.delete("/",(req, res)=>{
//     res.send({data:" cat"});
// });
// module.exports = router;

//////////////////////////////////////////////////////////////////////////
// const express = require("express");
// const router = express.Router()
// const mysql = require("mysql")

// const db3 = require("../server");
// db3.connectDB.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("Connection done");
// });


// router.get('/', function(req,res,next) {
//     var query="select * from categorie ";
//     db3.connectDB.query(query, function(err, result){
//         if(err){
//             console.log(err);
//             res.send("unable to get the categories")
//         }
//         else{
//             res.send(result);
//         }
//     })
// })
// router.post('/',function(req,res,next){
//     const data={name:req.name};
//    db3.connectDB.query("INSERT INTO categorie SET?",data, function(err,result){
//     if(err)throw err;
//     res.send(result)}
//     )})

//     module.exports = router;
    ////////////////////////////////////////////////////////////////////////////////////////////


    
const express = require("express");
const router = express.Router()
const mysql = require("mysql")

const connectDB = require("../config/db")
;
console.log(connectDB)
router.get('/', function(req,res) {
    var query="select * from categorie ";
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