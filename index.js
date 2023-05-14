const express = require('express')
require('./config') //import datbase
const product = require('./product') ; //import model and schema
const port = process.env.port || 8080 ;
const app = express() ;

//####################MIDDLEWARE################
app.use(express.json())

//####################INSERT ROUTE################
app.post('/create' , async(req , resp) => {
    let data = new product(req.body) ;
    let result = await data.save() ;
    console.log(result);
    resp.send(result) ;
})

//####################GET ROUTE################
app.get('/list' , async (req , resp) => {
    let data = await product.find() ;
    console.log(data) ;
    resp.send(data) ;
})

//####################DELETE ROUTE################
app.delete("/delete/:_id" , async (req , resp) => {
    let data = await product.deleteOne(req.params) ;
    console.log(data) ;
    resp.send(data) ;
})

//####################UPDATE ROUTE################
app.put("/update/:_id" , async (req , resp) => {
    let data = await product.updateOne(
        req.params ,
        {$set: req.body}
    ) ;
    console.log(data) ;
    resp.send(data) ;
})

//####################SEARCH SINGLE API ROUTE################
app.get('/search/:key' , async (req , resp) => {
    let data = await product.find(
        {
            $or : [
                { "title" : {$regex:req.params.key} }
            ]
        }
    )
    console.log(data) ;
    resp.send(data) ;

})

//####################SEARCH MULTIPLE API ROUTE################
app.get('/multiple/:key' , async (req , resp) => {
    let data = await product.find(
        {
            $or : [
                { "title" : {$regex:req.params.key} },
                { "category" : {$regex:req.params.key} },
                { "brand" : {$regex:req.params.key} }
            ]
        }
    )
    console.log(data) ;
    resp.send(data) ;

})



app.listen(port) ;