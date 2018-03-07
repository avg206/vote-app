const webpack = require('webpack')

const server = require('./server')
const config = require('./webpack.config')

const compiler = webpack(config, (err) => {
  if (err) throw err
})

compiler.watch({}, (err, stats) => {
  if (err) throw err

  console.log(stats.toString({
    chunks: false,
    colors: true,
  }))
})

server()
