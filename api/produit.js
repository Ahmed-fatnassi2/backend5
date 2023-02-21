const express = require("express");
const con = require("../server");
const app = express();


app.get("/", (req, resp) => {
  con.query("select * from product", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});
 app.post("/",(req,resp)=>{
  const data={name:req.name,price:req.price,id_categorie:req.id_categorie,src:req.src};
  con.query("INSERT INTO product SET?",data,(error,results,fields)=>{
    if(error)throw error;
    resp.send(results)
  })
 })
 app.delete("/:id",(req,resp)=>{
  con.query("DELETE FROM produit WHERE id="+req.params.id,(error,results)=>{
    if(error)throw error;
    resp.send(results)})
  })



  app.put('/:id', (req,res)=>{
    const data = [req.body.price,req.params.id];
    con.query("UPDATE students SET price = ? where id = ?",data,(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send(result);
        }
    })
});


app.listen("5000")