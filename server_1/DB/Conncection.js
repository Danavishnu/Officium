const mongoose = require('mongoose');

const URI ="mongodb+srv://vishnu:vishnu17@cluster0-ykybp.mongodb.net/test?retryWrites=true&w=majority";

console.log("Reached 2")
const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;
