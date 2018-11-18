const Koa = require('koa')
const app = new Koa()

const handleCors = require('./middlewares/handleCors')
const respDataPackage = require('./middlewares/respDataPackage')
const routers = require('./routers/index')

// 初始化路由中间件
app.use(handleCors())
  .use(respDataPackage())
  .use(routers.routes())
  .use(routers.allowedMethods())


app.listen(3009, () => {
  console.log('server run as 3009')
})
