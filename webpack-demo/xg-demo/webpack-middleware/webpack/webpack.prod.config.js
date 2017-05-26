var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pluginsIndex = require('./plugins/index.js');
module.exports = {
  entry: {},
  output: {
    path: path.join(__dirname, 'public'),
    // publicPath作用：HtmlWebpackPlugin插件中通过template生成的html文件中，引入资源的路径相对于该配置地址
    publicPath: "http://cdn.domain.com/public/biz_activities",
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
    new pluginsIndex()
  ]
};
