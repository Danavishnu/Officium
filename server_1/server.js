const express = require('express');
const connectDB = require('./DB/Conncection');
const app = express();
var cors=require('cors')
const serverless=require('serverless-http');


// exports.handler = async event => {
//     connectDB();
//     app.use(cors());
//     app.use(express.json({ extended: false }));
//     app.use('/api',require('./Api/User'))
//     app.use('/marks', require('./Api/Marks'));
//   }
// 

    console.log("Reached 1")
    connectDB();
    app.use(cors());
    app.use(express.json({ extended: false }));
    app.use('/api',require('./Api/User'))
    app.use('/marks', require('./Api/Marks'));
    const Port = 3003;
    app.listen(Port, () => console.log('Server started'))
    // module.exports.handler=serverless(app)

