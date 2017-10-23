const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//or const {Schema}=mongoose; -- these are the same

const commentSchema = new Schema({
  comment: textarea
});

module.exports = mongoose.model('comment', commentSchema);
