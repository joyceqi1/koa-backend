// require("@babel/register") //目的将ES6转成ES5

const Koa = require('koa')
const app = new Koa()
const config = require('./config/config')

const router = require('./route/routes')
app.use(router.routes())
app.use(router.allowedMethods())

// var bodyParser = require('koa-bodyparser');
// app.use(bodyParser());

app.listen(config.serverPort);