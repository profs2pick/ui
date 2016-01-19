require('babel-register');
require('babel-polyfill');
require('dotenv').load({ path: __dirname + '/../.env' });
require('./server');
