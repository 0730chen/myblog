const express = require('express')
const router = express.Router()
const path = require('path')
    // const checkLogin = require('../middlewares/check')

router.get('/', function(req, res, next) {
    const page = path.join(__dirname, '../views', 'page.html')
    res.sendFile(page)
})
router.get('/header', function(req, res, next) {
    const page = path.join(__dirname, '../views', 'page.html')
    res.sendFile(page)
})
router.get('/learn', function(req, res, next) {
    res.send('我是学习')

})
router.get('/interst', function(req, res, next) {

    res.send('我是兴趣')
})
router.get('/daily', function(req, res, next) {
    const daily = path.join(__dirname, '../views', 'daily.html')

    res.sendFile(daily)
})
router.get('/all', function(req, res, next) {
        const comments = path.join(__dirname, '../views', 'comments.html')
        res.sendFile(commetns)
    })
    //发表一篇文章
    // router.post('/create', checkLogin, function(req, res, next) {
    //         res.send('发表文章')
    //     })
    //     //发表文章页
    // router.get('/create', checkLogin, function(req, res, next) {
    //         res.send('发表文章页')
    //     })
    //     //单独的文章页面
    // router.get('/:postId', function(req, res, next) {
    //     res.send('文章详情页')
    // })
    // router.get('/post/edit', checkLogin, function(req, res, next) {
    //     res,
    //     send('更新文章页')
    // })
    // router.post('/:postId/edit', checkLogin, function(req, res, next) {
    //     res.send('更新文章')
    // })
    // router.get('/:postId/remove', checkLogin, function(req, res, next) {
    //     res.send('删除文章')
    // })
module.exports = router