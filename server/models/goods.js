var mongoose = require('mongoose')
var Schema = mongoose.Schema;//定义表模型

//定义商品模型
var productSchema = new Schema({
  "productId":{type:String},
  "productName":String,
  "productPrice":Number,
  "productImage":String
})

module.exports = mongoose.model('Good',productSchema)
