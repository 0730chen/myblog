const express = require('express')
    //引入静态文件路径
const path = require('path')
const ejs = require('ejs')
const $ = require('jquery')
const url = require('url')
const signin = require('./routers/signin')
const session = require('express-session')
const getTest = require('./mongodb')
const app = express()
    //配置静态文件路径
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', ejs.__express)
app.set('view engine', 'html')

app.get('/', function(req, res) {
    //使用模板引擎将模板改变成html文件
    // var user = url.parse(req.url, true)
    // var name = user.query['username']
    // var psw = user.query['password']
    //     // console.log(getTest.GetTest())
    //     // console.log(name, psw)
    // var data = {
    //         password: psw,
    //         name: name
    //     }
    //     // console.log('这个是data数据' + data['name'])
    //操作数据库
    // getTest.GetTest(data, 1)
    const index = path.join(__dirname, 'views', 'index.html')

    res.sendFile(index)
})
app.use('/signin', signin)
    // routes(app)
app.listen('3000', function() {
    console.log('127.0.0.1:3000')
})