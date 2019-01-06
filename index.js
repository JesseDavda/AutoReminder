const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.post('/newReminder', (ctx, next) => {
    console.log(ctx);
})

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 8000
app.listen(port);
console.log('Server listening on port: ', port);