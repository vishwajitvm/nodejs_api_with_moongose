const express = require('express')
require('./config') //import datbase
const product = require('./product') ; //import model and schema
const port = process.env.port || 8080 ;
const app = express() ;

//####################MIDDLEWARE################
app.use(express.json())

//####################INSERT ROUTE################
//####################INSERT ROUTE################
app.post('/create' , async(req , resp) => {
    let data = new product(req.body) ;
    let result = await data.save() ;
    console.log(result);
    resp.send(result) ;
})

app.listen(port) ;