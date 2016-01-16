var webpack = require('webpack');
var s = JSON.stringify;
var p = JSON.parse;

require('dotenv').load({ path: __dirname + '/../../.env' });

module.exports = {
  module: {
    noParse: [/node_modules\/sinon\//], // https://github.com/airbnb/enzyme/issues/47
    loaders: [{
      test: /\.(js|jsx|es6)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.es6'],
    alias: { sinon: 'sinon/pkg/sinon' } // // https://github.com/airbnb/enzyme/issues/47
  },
  plugins: [
    new webpack.DefinePlugin({
      _API_: s(process.env.API),
      _ROOT_URI_: s(process.env.ROOT_URI),
      _ENV_: s(process.env.NODE_ENV),
      _DEV_: s(process.env.NODE_ENV !== 'production'),
      _PRODUCTION_: s(process.env.NODE_ENV === 'production'),
      _IMG_: s(process.env.IMG),
      _CDN_: s(process.env.CDN),
      // Server-side rendering option is explicitly set to false.
      // This is set only to true for the server.
      _SSR_: false,
      _REDUX_DEVTOOLS_: p(process.env.REDUX_DEVTOOLS)
    })
  ],
  // https://github.com/webpack/karma-webpack#source-maps
  devtool: 'inline-source-map',
  // https://github.com/airbnb/enzyme/issues/47
  externals: {
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'text-encoding': 'window'
  }
};
