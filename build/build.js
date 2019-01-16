const webpack = require('webpack')
const config = require('./webpack.prod.conf')
webpack(config, (err, stats) => {
  if(err || stats.hasErrors()){
    console.error(err)   //在这里处理错误
    return
  }
  console.log(stats.toString({
    chunks: false,  // 使构建过程更静默无输出
    colors: true    // 在控制台展示颜色
  }));
})