const express = require("express");
const con = require("../server");
const app = express();


app.get("/", (req, resp) => {
  con.query("select * from ingredients", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});
 app.post("/",(req,resp)=>{
  const data={name_ig:req.name_ig};
  con.query("INSERT INTO ingredients SET?",data,(error,results,fields)=>{
    if(error)throw error;
    resp.send(results)
  })
 })
 app.delete("/:id",(req,resp)=>{
  con.query("DELETE FROM ingredients WHERE id="+req.params.id,(error,results)=>{
    if(error)throw error;
    resp.send(results)})
  })