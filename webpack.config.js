const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: './public/dist/app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=es2015',
      },
      { test: /\.css$/, loader: 'style!css' },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
};
