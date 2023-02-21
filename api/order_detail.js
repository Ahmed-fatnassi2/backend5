const express = require("express");
const con = require("../server");
const app = express();


app.get("/", (req, resp) => {
  con.query("select * from order_detail", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});
 app.post("/",(req,resp)=>{
  const data={quantity:req.quantity,product_num:req.product_num,order_num:req.order_num};
  con.query("INSERT INTO order_detail SET?",data,(error,results,fields)=>{
    if(error)throw error;
    resp.send(results)
  })
 })