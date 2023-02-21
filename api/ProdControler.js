// const con = require("../server");
const mysql = require("mysql")
// const con = require("../server");
var con = mysql.createConnection("../server")

    const test = ((req,res)=>{
        con.query("select * from user", (err, result) => {
            if (err) { resp.send("error in api") }
            else { resp.send(result) }
          })

    })

    module.exports ={test}

    
    // module.exports ={test}