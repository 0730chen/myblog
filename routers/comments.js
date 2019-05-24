const express = require('express')
const router = express.Router()
const path = require('path')
var util = require('util')
var querystring = require('querystring')
var comment = path.join(__dirname, '../views', 'comments.html')

router.post('/', function(req, res, callback) {

    // res.send('我是留言页面')
    console.log('我是post请求')
    var data = ''
    req.on('data', function(chunk) {
        console.log('chunk', chunk)
        data += chunk;
        console.log('chunk', data)
    })
    req.on('end', function(req, response) {

            data = querystring.parse(data)
            console.log(data['text'])
                // res.end(util.inspect(data))
                //由于变量名重名
            res.status(200).json({ msg: '登陆成功', url: "/comments", Data: data })
        })
        // res.status(200).json({ msg: '登陆成功', url: "/comments", Data: data })
        // res.setHeader('Cache-Control', 'no-cache')
        // res.redirect('signin')
        // res.location('signin')
        // console.log('这个是On外面的数据' + data)
        // res.status(200).json({ msg: '登陆成功', url: "/comments", Data: data })

    // res.status(200).json({ msg: '登陆成功', url: "/comments", Data: data })


    // res.sendFile(comment)

    // const comment = path.join(__dirname, '../views', 'comments.html')
    // res.render('comments')
    //     // console.log(comment)
    // res.send('<li>{{data}}</li>')
    // res.send('留言页面')
    // res.sendFile(comment)
    // console.log(comment)
    // res.setHeader('Cache-Control', 'no-cache');
    // res.render('comments')
    // console.log('我要跳转了')
    // res.redirect('/comment')

})
router.get('/', function(req, res) {
    // res.redirect('signin')
    // res.sendFile(comment)
    res.send()
        // console.log('前面传来的数据')
        // res.redirect('comments')

})

module.exports = router