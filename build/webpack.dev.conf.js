const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8080
  }
})
