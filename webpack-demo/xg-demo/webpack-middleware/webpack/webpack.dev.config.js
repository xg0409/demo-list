var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 自动刷新
  // entry: {
  //   'creditcard/bank_cbc': ['webpack-hot-middleware/client?reload=true', "./client/creditcard/bank_cbc"],
  //   'creditcard/bank_icbc': ['webpack-hot-middleware/client?reload=true', "./client/creditcard/bank_icbc"],
  //   'activities/baitiao/get_coupon': ['webpack-hot-middleware/client?reload=true', "./client/activities/baitiao/get_coupon"],
  //   'activities/baitiao/pull_new': ['webpack-hot-middleware/client?reload=true', "./client/activities/baitiao/pull_new"]
  // },
  entry: {
    'creditcard/bank_cbc': "./client/creditcard/bank_cbc",
    'creditcard/bank_icbc': "./client/creditcard/bank_icbc",
    'activities/baitiao/get_coupon': "./client/activities/baitiao/get_coupon",
    'activities/baitiao/pull_new': "./client/activities/baitiao/pull_new"
  },
  output: {
    path: path.join(__dirname, 'dest'),
    // publicPath作用：HtmlWebpackPlugin插件中通过template生成的html文件中，引入资源的路径相对于该配置地址
    publicPath: "http://localhost:8080/dest",
    filename: "[name]/bundle.js"
      // chunkFilename: "js/[id].chunk.js"
  },
  module: {
    loaders: [ //加载器
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!less') },
      { test: /\.html$/, loader: "html" },
      { test: /\.(png|jpg)$/, loader: 'url-loader', query: { limit: '2000', "context": "client", name: '/[path]/[name].[ext]' } }
    ]
  },
  debug: true,
  devtool: '#source-map',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new ExtractTextPlugin('[name]/bundle.css', { allChunks: true }), //单独使用style标签加载css并设置其路径
    // new ExtractTextPlugin("css/[name].css"),
    new webpack.optimize.UglifyJsPlugin({ //压缩代码
      compress: {
        warnings: false
      },
      except: ['$super', '$', 'exports', 'require'] //排除关键字
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.HotModuleReplacementPlugin()
  ]
};
