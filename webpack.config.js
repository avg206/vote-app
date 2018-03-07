const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
  entry: './src/app.js',

  output: {
    path: `${__dirname}/public/`,
    filename: '/dist/app.bundle.js',
  },

  resolve: {
    extensions: ['', '.js'],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-object-rest-spread'],
        },
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=/dist/[hash].[ext]',
      }, {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=/dist/[hash].[ext]',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader?limit=10000&name=/dist/images/[hash].[ext]!img?progressive=true',
      },
    ],
  },

  plugins: [
    new ProgressBarPlugin(),
  ],
}
