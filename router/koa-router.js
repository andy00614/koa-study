// const Koa = require('Koa')
// const fs = require('fs')
// const app = new Koa()

// const Router = require('koa-router')

// let home = new Router()


// // router 1
// home.get('/',async (ctx) => {
//   let html = `
//     <ul>
//       <li><a href="/page/helloworld">/page/helloworld</a></li>
//       <li><a href="/page/404">/page/404</a></li>
//     </ul>
//   `
//   ctx.body = html
// })

// // router 2

// let page = new Router()
// page.get('/404',async (ctx) => {
//   ctx.body = '404 page'
// }).get('/helloworld',async(ctx) => {
//   ctx.body = 'helloworld page'
// })

// // decorator router
// let router = new Router()
// router.use('/',home.router(),home.allowedMethods())
// router.use('/page',page.routes(),page.allowedMethods)

// //loading middleware
// app.use(router.routes()).use(router.allowedMethods())

// app.listen(3000,() => {
//   console.log('[demo] route-use-middleware is starting at port 3000')
// })

const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

const Router = require('koa-router')

let home = new Router()

// 子路由1
home.get('/', async ( ctx )=>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})

// 子路由2
let page = new Router()
page.get('/404', async ( ctx )=>{
  ctx.body = '404 page!'
}).get('/helloworld', async ( ctx )=>{
  ctx.body = 'helloworld page!'
})

// 装载所有子路由
let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000')
})