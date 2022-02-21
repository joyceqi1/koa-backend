const router = new require('koa-router')()
const { insertUser } =require('../app/model/user')

router.post('/regist', insertUser)

module.exports = router