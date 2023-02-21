///////////////////////////////////////////////////////////////////////////

const express = require("express");
const router = express.Router()
const mysql = require("mysql")

const connectDB = require("../config/db")
;
console.log(connectDB)
// connectDB = mysql.createConnection({
//     host: "localhost", 
//     user: "userapp",
//     port: 3306,
//     password: "admin",
//     database: "projet_stage",
  
// });
// connectDB.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("Connection done");
// });

// connectDB.query(q,[value],(err,data)=>{
//     if (err) return res.json(err);
//     return res.json("Order has been created")
// }
router.post('/', function(req,res) {
    console.log(req.body)
    const value1= req.body.name
    const value2= req.body.password
    var query="select id_role from user where name=?and password=? ";
    connectDB.query(query,[value1,value2], function(err, result){
        if(err){
            console.log(err);
            res.send ("unable to get the products")
        }
        else{
            res.send(result);
        }
    })
})
module.exports = router;
////////////////////////////////////////////////////////////////////////////////


// const express = require("express");
// const router = express.Router()

// router.get("/", (req, res)=>{
//     res.send({data:" auth"});
// });
// // router.post("/", (req, res)=>{
// //     res.send({data:" auth"});
// // });

// // app.delete("/",(req, res)=>{
// //     res.send({data:" auth"});
// // });

// module.exports = router;
///////////////////////////////////////////////
// const express = require("express");
// const con = require("../server");
// const app = express();


// app.get("/", (req, resp) => {
//   con.query("select * from categorie", (err, result) => {
//     if (err) { resp.send("error in api") }
//     else { resp.send(result) }
//   })
// });



// app.listen("5000")


// RESERVE

// ///////////////////////////////////////////////////////////////////////////

// const express = require("express");
// const router = express.Router()
// const mysql = require("mysql")

// // const connectDB = require("../server");
// connectDB = mysql.createConnection({
//     host: "localhost", 
//     user: "userapp",
//     port: 3306,
//     password: "admin",
//     database: "projet_stage",
  
// });
// connectDB.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("Connection done");
// });


// router.get('/', function(req,res) {
//     var query="select * from product ";
//     connectDB.query(query, function(err, result){
//         if(err){
//             console.log(err);
//             res.send("unable to get the products")
//         }
//         else{
//             res.send(result);
//         }
//     })
// })
// module.exports = router;
// ////////////////////////////////////////////////////////////////////////////////


// // const express = require("express");
// // const router = express.Router()

// // router.get("/", (req, res)=>{
// //     res.send({data:" auth"});
// // });
// // // router.post("/", (req, res)=>{
// // //     res.send({data:" auth"});
// // // });

// // // app.delete("/",(req, res)=>{
// // //     res.send({data:" auth"});
// // // });

// // module.exports = router;
// ///////////////////////////////////////////////
// // const express = require("express");
// // const con = require("../server");
// // const app = express();


// // app.get("/", (req, resp) => {
// //   con.query("select * from categorie", (err, result) => {
// //     if (err) { resp.send("error in api") }
// //     else { resp.send(result) }
// //   })
// // });



// // app.listen("5000")


// RESERVE