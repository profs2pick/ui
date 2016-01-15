import koa from 'koa';
import koaStaticMiddleware from './middlewares/koaStatic';
import initCookieMiddleware from './middlewares/initCookie';
import appMiddleware from './middlewares/app';

const app = koa();
app.use(koaStaticMiddleware);
app.use(initCookieMiddleware);
app.use(appMiddleware);

app.listen(_PORT_);
console.log(`Listening to port ${_PORT_}`);
