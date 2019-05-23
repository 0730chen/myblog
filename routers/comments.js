const express = require('express')
const router = express.Router()

router.post('/', function(req, res, next) {
    res.send('创建留言')
})
router.get('/:commentId/remove', function(req, res, next) {
    res.send('删除留言')
})

module.exports = router