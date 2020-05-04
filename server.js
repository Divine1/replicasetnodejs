const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require("express");
const dbconfig=require("./configfiles/dbconfig");
const app = express();
const PORT = 4900;

/*
mongoose.connect(dbconfig.mongo.uri, dbconfig.mongo.options).then(
    () => {
        console.log("connection success");
    },
    (err) => {
        console.log("connection failed");
        console.log("err ",JSON.stringify(err));
    }
);
*/

app.get("/test",(req,res)=>{
    console.log("in /test route")
    res.send({status : " from test route"});
})

app.listen(PORT,()=>{
    console.log("application is listening on PORT ",PORT);
})