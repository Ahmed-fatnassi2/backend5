const express = require("express");
const con = require("../server");
const app = express();


app.get("/users", (req, resp) => {
  con.query("select * from user", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});



app.listen("5000")