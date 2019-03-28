var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');//获取cookie信息，进行转换
var logger = require('morgan');//进行日志输出
var ejs = require('ejs');
//路由按模块划分
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var goodsRouter = require('./routes/goods');

var app = express();//启动服务

// view engine setup
app.set('views', path.join(__dirname, 'views'));//设置view访问目录,通过join将当前目录和views目录连接起来
app.engine('.html', ejs.__express);
app.set('view engine', 'html');//设置引擎为jade引擎

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//设置静态目录
//通过地址去访问路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/goods', goodsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
