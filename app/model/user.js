const localSequelize = require('../../config/db')
const sequelize = require('requelize')

const userObj = {
    id: {
        type: sequelize.BIGINT,
        primaryKey: true
    },
    name: sequelize.STRING(100),
    password: sequelize.STRING(100)
}
const User = localSequelize.define('user', userObj,{
    timestamps: false
})

/**
 * 判断用户名是否在用户列表
 * @param {*} name 
 */
export async function isNameInUserTable(name){
    return await User.findOne({where: {name} } );
}

export async function insertUser(user){
    return await User.creat(user)
}