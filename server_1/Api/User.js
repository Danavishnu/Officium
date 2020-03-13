const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

exports.handler = async event =>{
route.post('/', async (req, res) => {
  console.log("Control Here")
  const {FirstName,LastName,Email,Password} = req.body;
  let user = {};
  // console.log(req.body)
  user.FirstName = FirstName;
  user.LastName = LastName;
  user.Email=Email;
  user.Password=Password;
  // console.log(user)
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);  
});

route.get('/:Username',(req,res)=>{
  var str=req.params.Username;
  // res.writeHead(200, {'Content-Type': 'application/json'});
  console.log(str)
  var arr = str.split(",")
  // console.log(arr);
  // const password=req.params.Password
  // console.log(name)
  User.find({
    "Email":arr[0],
    "Password":arr[1]
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

}




