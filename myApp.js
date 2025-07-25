require('dotenv').config()


let express = require('express');
let app = express();
let bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


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

app.get('/now', function(req, res, next) {
    req.time=new Date().toString();
    next();
}, function(req,res) {
    res.json({time: req.time})
})

app.get('/:word/echo',function(req,res) {
    res.json({echo: req.params.word})
})





app.route('/name').get(function(req,res)  {
    const firstname = req.query.first;
    const lastname = req.query.last;    
    res.json({name: `${firstname} ${lastname}`});
}).post(
    function(req,res)  {
        const firstname = req.body.first;
        const lastname = req.body.last;    
        res.json({name: `${firstname} ${lastname}`});
    }    
)































 module.exports = app;
