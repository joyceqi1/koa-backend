const router = new require('koa-router')()
// const user = require('./user')
const home = require('../app/model/home')

// router.get('/user', user.routes())
// router.get('/home', home.getHome)
router.get('/api/hello', home.getHello)
router.get('/api/home', home.getHome)
module.exports = router