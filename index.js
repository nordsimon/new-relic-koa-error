const newrelic = require('newrelic');
const Koa = require('koa');

const app = new Koa();

const delay = (time) => new Promise((resolve, reject) => setTimeout(resolve, time));

app.use(async (ctx, next) => {

  const availableHere = newrelic.getTransaction();
  console.log(availableHere)

  await delay(1000);

  const notAvailableHere = newrelic.getTransaction();
  console.log(notAvailableHere)

  ctx.response.body = 'hello';

});

app.listen(8000)
