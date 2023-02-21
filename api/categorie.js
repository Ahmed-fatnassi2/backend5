const express = require("express");
const con = require("../server");
const app = express();


app.get("/", (req, resp) => {
  con.query("select * from categorie", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});
 app.post("/",(req,resp)=>{
  const data={name:req.name};
  con.query("INSERT INTO categorie SET?",data,(error,results,fields)=>{
    if(error)throw error;
    resp.send(results)
  })
 })
app.delete("/:id",(req,resp)=>{
  con.query("DELETE FROM categories WHERE id="+req.params.id,(error,results)=>{
    if(error)throw error;
    resp.send(results)})
  })


app.listen("5000")