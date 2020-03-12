const mongoose = require('mongoose');

const marks = new mongoose.Schema({
  FirstName: {
    type: String
  },
  LastName:{
    type: String
  },
  test:{
    type:String
  },
  marks: {
    type: String
  }
});

module.exports = Marks = mongoose.model('marks', marks);
