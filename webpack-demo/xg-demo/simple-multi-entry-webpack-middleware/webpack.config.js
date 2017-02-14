var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    'bank_cbc': "./client/bank_cbc/index.js",
    'bank_icbc': "./client/bank_icbc/index.js"
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
  // devtool: '#source-map',
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
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      title: 'My App',
      // favicon: './client/img/favicon.ico', //favicon路径
      filename: './bank_cbc/index.html', //生成的html存放路径，相对于 path
      template: './bin/index.template.html', //html模板路径
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: true, //为静态资源生成hash值
      minify: { //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true //删除空白符与换行符
      },
      chunks: [
        'bank_cbc'
      ]
    }),
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      title: 'My App',
      // favicon: './client/img/favicon.ico', //favicon路径
      filename: './bank_icbc/index.html', //生成的html存放路径，相对于 path
      template: './bin/index.template.html', //html模板路径
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: true, //为静态资源生成hash值
      minify: { //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true //删除空白符与换行符
      },
      chunks: [
        'bank_icbc'
      ]
    })
  ]
};
