const express = require('express')
const router = express.Router()
const path = require('path')
const url = require('url')
var querystring = require('querystring')
const getTest = require('../mongodb')

router.get('/', function(req, res, next) {
    const signin = path.join(__dirname, '../views', 'sign.html')
        // var user = url.parse(req.url, true)
        // var name = user.query['username']
        // var psw = user.query['password']
        //     // console.log(getTest.GetTest())
        //     // console.log(name, psw)
        // var data = {
        //         name: name,
        //         psw: psw
        //     }
        //     // console.log('这个是data数据' + data['name'])
        // getTest.GetTest(data, 1)

    res.sendFile(signin)
})

router.post('/', function(req, res, next) {
    const logining = path.join(__dirname, '../views', 'logining.html')
        // var user = url.parse(req.url, true)
        // console.log(user)
        // var name = user.query['username']
        // var psw = user.query['password']
        //     // console.log(getTest.GetTest())
        //     // console.log(name, psw)
        // var data = {
        //         name: name,
        //         psw: psw
        //     }
    var data = ''
    req.on('data', function(chunk) {
        data += chunk
    })
    req.on('end', function(req, response) {
            data = querystring.parse(data)
            console.log(data)
            response.status(200);
            response.json({ msg: '登陆成功', url: "/logining", Data: data })
        })
        // console.log('这个是data数据' + data['name'])
        // console.log(data)
        // getTest.GetTest(data, 1)
        //     // console.log(login)
        // res.sendFile(logining)
})

module.exports = router