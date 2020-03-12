const mongoose = require('mongoose');

const user = new mongoose.Schema({
  FirstName: {
    type: String
  },
  LastName:{
    type: String
  },
  Email:{
    type:String
  },
  Password: {
    type: String
  }
});

module.exports = User = mongoose.model('user', user);
