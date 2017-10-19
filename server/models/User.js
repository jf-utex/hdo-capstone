const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//or const {Schema}=mongoose; -- these are the same

const userSchema = new Schema({
  googleId: String,
  fName: String,
  comment: String
});

mongoose.model('users', userSchema);
