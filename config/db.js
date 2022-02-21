// mysql/index.js
 
const Sequelize = require('sequelize');

const databaseConfig = {
      DATABASE:'mywebsite',
      USERNAME:'root',
      PASSWORD:'123456',
      PORT:'3306',
      HOST:'localhost'
}
 
export const localSequelize = new Sequelize(databaseConfig.DATABASE, databaseConfig.USERNAME, databaseConfig.PASSWORD,{
  host: databaseConfig.HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})
 