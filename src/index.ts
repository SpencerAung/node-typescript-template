import Koa from 'koa'

const app: Koa = new Koa()

app.use((ctx) => {
  ctx.body = 'Hello world'
})

app.listen(3000)
console.log('listening on port 3000')
