async function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time)
  })
}
module.exports = {
  getHome: async function (ctx, next) {
    console.log('home');
    await delay(2000)
    ctx.body = 'home'
  },
  getHello: async function (ctx, next){
    console.log('hello');
    await delay(2000)
    ctx.body = 'hello koa'
  }
}
