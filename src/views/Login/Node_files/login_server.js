// import useRouter from 'utils/useRouter';
// var sql=require('sql');
// var http=require('http');
var express = require('express');
// var mysql=require('mysql');
var app=express();
app.use(express.urlencoded());
const router = express.Router();

// var  test =0;
// path =require('fs');

// var connection=mysql.createConnection({
//     host     :"mine.c6xopaawwic4.us-east-1.rds.amazonaws.com",
//     user     :"vishnu",
//     password :"vishnu17",
//     port     :"3306",
//     database :"mine"
// });

// connection.connect(function(err){
//     if(err){
//         console.log("error connection");
//         console.log(err);
//     }
//     else{
//         console.log("Connection Successfull");
//     }
// });

app.post('/logincheck',function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("enterd");
    var email=req.param('email',null);
    var password=req.param('password',null);
    console.log(email);
    console.log(password);
    
    
    if(email == "vishnu5522@gmail.com")
    {   
        res.write("Hello");
        // res.redirect('http://localhost:3000/overview')
    }
    
    else
    {
        // alert("Wrong username or passwprd");
        res.redirect('http://localhost:3000/auth/login')
    }

    // connection.query('Select * from user',function(err,results,fields){
    //     var length=results.length;
    //     for (i=0;i<length;i++){
    //         if(results[i].username==username && results[i].password1==password){
    //             console.log("Welcome Home Edith ")
    //             test=1;
    //         }
    //     }
    //    if(test==1)
    //         res.send("Welcome Home Edith");
    //         //res.sendFile(path.join(__dirname, '../public', 'index1.html'));
    //     else
    //         res.send("Imposter Go back");
    // });
    
});

app.listen(8080);
console.log("Listening on 8080");
