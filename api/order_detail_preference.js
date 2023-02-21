const express = require("express");
const con = require("../server");
const app = express();


app.get("/", (req, resp) => {
  con.query("select * from order_detail_preference", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});
 app.post("/",(req,resp)=>{
  const data={ingerdient_for_change:req.ingerdient_for_change,order_num:req.order_num,qt_ig:req.qt_ig};
  con.query("INSERT INTO order_detail_preference SET?",data,(error,results,fields)=>{
    if(error)throw error;
    resp.send(results)
  })
 })