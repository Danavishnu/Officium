const express = require('express');
const mongoose = require('mongoose');
const Marks = require('../DB/Marks');
const route = express.Router();

route.get('/:Username',(req,res)=>{
  console.log("Came control")
  var str=req.params.Username;
  // res.writeHead(200, {'Content-Type': 'application/json'});
  console.log(str)
  var arr = str.split(",")
  console.log(arr);
  // const password=req.params.Password
  // console.log(name)
  Marks.find({
    "FirstName":arr[0],
    "LastName":arr[1]
  })
  .exec()
  .then(doc => {
    console.log(doc)
    if(doc)
    {
      res.status(200).json(doc)   
    }
    else{
      res.status(404).json({message:'No valid Entry for provided ID'})
    }
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({error:err});
  }); 
 

  
})




module.exports = route;
