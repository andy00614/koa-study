const Koa = require('Koa')
const app = new Koa()
const Router = require('koa-router')

const home = new Router()
home.get('/index',(ctx) => {
  ctx.body = ctx.request
})


const router = new Router()
router.use('/',home.routes()).use(home.allowedMethods())

app.use(async (ctx) => {
  const url = ctx.url
  const request = ctx.request
})

app.use(router.routes()).use(router.allowedMethods())

app.listen('3000')