const express = require('express');
var ejs = require('ejs');


const app = express();
app.set('views', './static');
app.set('view engine', 'ejs');
app.get('/', (req, res)=>{
    res.render('index');
});

function notFound(req, res, next){
    res.status(404);
    const error = new Error("The page you are finding doesn't exsist..visit '/'");
    next(error);
}

function errorHandler(error, req, res, next){
    res.status(res.statusCode || 500);
    res.send(`<div style="color:red; text-align:center; margin-top:50vh"><h2>${error}😕</h2></div>`);
}

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server live at http://localhost:3000");
});