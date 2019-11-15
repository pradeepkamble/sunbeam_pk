var express=require("express");
var mysql=require("mysql");
var app=express();

app.use(express.json());
app.get("/",function(req,res){
res.send("welcome to the jenkins servers");
});

app.listen(4000,function(){
    console.log("server started at 4000");
});