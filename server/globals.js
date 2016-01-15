require('dotenv').load({ path: __dirname + '/../.env' });

global._API_ = process.env.API;
global._ROOT_URI_ = process.env.ROOT_URI;
global._ENV_ = process.env.NODE_ENV;
global._DEV_ = process.env.NODE_ENV !== 'production';
global._PRODUCTION_ = process.env.NODE_ENV === 'production';
global._IMG_ = process.env.IMG;
global._CDN_ = process.env.CDN;
global._PORT_ = process.env.PORT; // Server-side rendering-only option
global._SSR_ = true; // Server-side rendering option is explicitly set to true.
global._REDUX_DEVTOOLS_ = JSON.parse(process.env.REDUX_DEVTOOLS);
