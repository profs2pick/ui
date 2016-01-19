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
