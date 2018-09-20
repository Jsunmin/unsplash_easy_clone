const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema ({
  format:  String,
  width: Number,
  height: Number,
  filename: String,
  id: Number,
  author: String,
  author_url: String,
  post_url: String
});

const Images = mongoose.model('Image', ImageSchema);

module.exports = Images;