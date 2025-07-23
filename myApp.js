require('dotenv').config()

let express = require('express');
let app = express();

app.use(function(req,res,next) {
    console.log(req.method+' '+req.path+' - '+req.ip)
    next()
})

let static = express.static(__dirname+'/public')
app.use("/public",static)



console.log('Hello World')

app.get("/", (req,res) => {
     
    absolutePath = __dirname + '/views/index.html' 
    console.log(absolutePath)  
    res.sendFile(absolutePath)
    });

    app.get("/json", (req,res) => {
        const style=process.env.MESSAGE_STYLE;
        if(style=='uppercase') {
            res.json({"message": "HELLO JSON"});
        }
        else {
            res.json({"message": "Hello json"});
        }        
    })





































 module.exports = app;
