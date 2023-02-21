// const express = require("express");
// const router = express.Router()

// router.get("/", (req, res)=>{
//     res.send({data:" order_c"});
// });
// router.post("/", (req, res)=>{
//     res.send({data:" order_c"});
// });

// module.exports = router;
// ///////////////////////////////////////////////////////////////////////////
// // const express = require("express");
// // const router = express.Router()
// // const mysql = require("mysql")

// // const db2 = require("../server");
// // db2.connectDB.connect((err) => {
// //     if (err) {
// //         throw err;
// //     }
// //     console.log("Connection done");
// // });


// // router.get('/', function(req,res,next) {
// //     var query="select * from order_cmd ";
// //     db2.connectDB.query(query, function(err, result){
// //         if(err){
// //             console.log(err);
// //             res.send("unable to get the products")
// //         }
// //         else{
// //             res.send(result);
// //         }
// //     })
// // })
// // router.post('/',function(req,res,next){
// //     const data={total_paiement:req.total_paiement,means_paiement:req.means_paiement};
// //    db2.connectDB.query("INSERT INTO order_cmd SET?",data, function(err,result){
// //     if(err)throw err;
// //     res.send(result)}
// //     )})

// // module.exports = router;
// ////////////////////////////////////////////////////////////////////////////

const express = require("express");
const router = express.Router()
const mysql = require("mysql")
let cors = require("cors");
router.use(cors());

const connectDB = require("../config/db");
console.log(connectDB)
router.get('/', function(req,res) {
    //
    var query="select * from order_cmd,product WHERE order_cmd.command_id=product.id_product";

    // var query="select * from product where id_product =(?) ";//select from order_cmd //
    // const value= req.body.product_id
    //
    connectDB.query(query,function(err, result){
        if(err){
            console.log(err);
            res.send("unable to get the products")
        }
        else{
            res.send(result);
        }
    })
})
// router.post('/',function(req,res,next){
//     const data1={id:req.id};
//     const data="SELECT * FROM product where id_product= data1" ///////
//    connectDB.query("INSERT INTO order_cmd SET?", data, function(err,result){
//     if(err)throw err;
//     res.send(result)}
//     )})

router.post("/",(req,res,next)=>{
// const q= "INSERT INTO order_cmd ('command_id') VALUES (?)";
const q="INSERT INTO `order_cmd`(`command_id`) VALUES (?)"
const value= req.body.product_id
connectDB.query(q,[value],(err,data)=>{
    if (err) return res.json(err);
    return res.json("Order has been created")
})
})

router.delete("/:id_order_cmd",(req,res)=>{
    const deleteId=req.params.id_order_cmd;
    q= "DELETE FROM order_cmd WHERE id_order_cmd= ?"
     connectDB.query(q,[deleteId],(err,data)=>{
        // connectDB.query(q,[id_order_cmd],(err,data)=>{
        if(err) return res.json(err);
        return res.json("command has been deleted")
     })
})

module.exports = router;