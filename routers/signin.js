const express = require('express')
const router = express.Router()
const path = require('path')
const url = require('url')
const getTest = require('../mongodb')

router.get('/', function(req, res, next) {
    const sign = path.join(__dirname, '../views', 'sign.html')
    var user = url.parse(req.url, true)
    var name = user.query['username']
    var psw = user.query['password']
        // console.log(getTest.GetTest())
        // console.log(name, psw)
    var data = {
            password: psw,
            name: name
        }
        // console.log('这个是data数据' + data['name'])
    getTest.GetTest(data, 1)

    res.sendFile(sign)
})

router.post('/', function(req, res, next) {
    res.send('登陆')
})

module.exports = router