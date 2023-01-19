const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  //   author: ObjectId,
  name: String,
  price: Number,
  description: String,
  head1: String,
  head2: String,
  head3: String,
});

module.exports = mongoose.model("Product", ProductSchema);
