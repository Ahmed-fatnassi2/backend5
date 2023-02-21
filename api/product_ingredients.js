const express = require("express");
const con = require("../server");
const app = express();


app.get("/", (req, resp) => {
  con.query("select * from product_ingredients", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});
 app.post("/",(req,resp)=>{
  const data={req};
  con.query("INSERT INTO product_ingredients SET?",data,(error,results,fields)=>{
    if(error)throw error;
    resp.send(results)
  })
 })



app.listen("5000")