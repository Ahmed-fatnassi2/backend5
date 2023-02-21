const express = require("express");
const con = require("../server");
const app = express();


app.get("/", (req, resp) => {
  con.query("select * from order_cmd", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});
 app.post("/",(req,resp)=>{
  const data={id:req.id};
  con.query("INSERT INTO order_cmd SET?",data,(error,results,fields)=>{
    if(error)throw error;
    resp.send(results)
  })
 })
 app.delete("/:id",(req,resp)=>{
con.query("DELETE FROM order_cmd WHERE id_order_cmd="+req.params.id,(error,results)=>{
  if(error) throw error;
resp.send(results)

})
})
//
// router.post('/',function(req,res,next){
//   const data={total_paiement:req.total_paiement,means_paiement:req.means_paiement};
//  db.connectDB.query("INSERT INTO order_cmd SET?",data, function(err,result){
//   if(error)throw error;
//   resp.send(results)}
//   )})
  
//
app.listen("5000")