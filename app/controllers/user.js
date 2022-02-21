const { isNameInUserTable, insertUser } = require('../model/user')

export async function insertUser(ctx) {
    const data = ctx.request.body;
    const flag = await isNameInUserTable(data.name)
    if(flag) {
        ctx.body = '已注册'
    }else{
        const insertResult = await insertUser(data)
        ctx.body = '注册成功'
    }
}