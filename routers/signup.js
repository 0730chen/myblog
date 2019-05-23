const express = require('express')
const router = express.Router()
router.get('/', function(req.res, next) {
    res.sendFile(__dirname + '../views/sign.html')
    res.send('注册页')
})

router.post('/', function(req, res, next) {
    res.send('注册')
})
module.exports = router