const express = require('express');
const connectDB = require('./DB/Conncection');
const app = express();
var cors=require('cors')
const serverless=require('serverless-http');
const mongoose = require('mongoose');
const URI ="mongodb+srv://vishnu:vishnu17@cluster0-ykybp.mongodb.net/test?retryWrites=true&w=majority";


exports.handler = async event => {
    console.log("Reached 1")
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      });
      console.log('db connected..!');
    // connectDB();
    app.use(cors());
    app.use(express.json({ extended: false }));
    console.log("Reached 3")
    app.use('/api',require('./Api/User'))
    console.log("Reached 4")
    app.use('/marks', require('./Api/Marks'));
    console.log("Reached 5")
  }


    // console.log("Reached 1")
    // connectDB();
    // app.use(cors());
    // app.use(express.json({ extended: false }));
    // app.use('/api',require('./Api/User'))
    // app.use('/marks', require('./Api/Marks'));
    // const Port = 3003;
    // app.listen(Port, () => console.log('Server started'))
    // module.exports.handler=serverless(app)

