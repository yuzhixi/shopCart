var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods')

/* GET users listing. */
//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/dumall')

mongoose.connection.on('connected',function(){
  console.log('success')
})

// mongoose.connection.on('error',function(){
//   console.log('error')
// })


mongoose.connection.on('disconnected',function(){
  console.log('disconnected')
})

router.get('/',function(req,res,next){
  let page = parseInt(req.param('pageNum'));
  let pageSize = parseInt(req.param('pageSize'));
  let skipNum = (page - 1)*pageSize;
  let GoodsModel = Goods.find().skip(skipNum).limit(pageSize)
  GoodsModel.find({},function(err,doc){
    if(err){
      res.json({
        status:'1',
        msg:err.msg
      })
    }else{
      res.json({
        status:'0',
        msg:'',
        result:{
          count:doc.length,
          list:doc
        }
      })
    }
  })
})
module.exports = router;
