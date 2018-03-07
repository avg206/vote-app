const Koa = require('koa')
const koaStatic = require('koa-static')

module.exports = () => {
  const app = new Koa()

  app.use(koaStatic('./public'))

  app.listen(3000)

  console.log('listening on port 3000')
}
