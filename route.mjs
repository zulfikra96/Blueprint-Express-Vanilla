const fs = require('fs')


const route = (app) => {

    app.get('/', function(req,res){
        res.send("hello world")
    })



}




module.exports = { route }