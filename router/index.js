const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

function render(page) {
  return new Promise((resolve,reject) => {
    let viewUrl = `./view/${page}`
    fs.readFile(viewUrl,'binary',(err,data) => {
      if(err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

// match url is a bad method,
// next is middleware
async function route(url) {
  let view = '404.html'
  switch(url) {
    case '/':
      view = 'index.html'
      break
    case '/index': 
      view = 'index.html'
      break
    case '/todo': 
      view = 'todo.html'
      break
    case '/404': 
      view = '404.html'
      break
    default:
      break
  }
  let html = await render(view)
  return html
}

app.use(async (ctx) => {
  const url = ctx.request.url
  const html = await route(url)
  ctx.body = html
})

app.listen(3000)