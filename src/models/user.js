const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName : {
    type : String,
    required : true,
    maxlength :100,
    minlength:2
  },
  name : {
    type : String,
    required : true,
    maxlength :100,
    minlength:2
  },
  email: {
    type:String,
    required:false,
    match:  /^.+@.+\..+$/
  }
},{strict:false})


module.exports = mongoose.model('User',userSchema)