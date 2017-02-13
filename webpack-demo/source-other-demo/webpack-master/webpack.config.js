var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index: "./src/js/page/index.js",
    // dialog:"./src/js/components/dialog/index.js"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // publicPath作用：HtmlWebpackPlugin插件中通过template生成的html文件中，引入资源的路径相对于该配置地址
    publicPath: "/dist",
    filename: "js/[name].js",
    chunkFilename: "js/[id].chunk.js"
  },
  module: {
    loaders: [ //加载器
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css") },
      { test: /\.html$/, loader: "html" },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=./img/[hash].[ext]' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ //加载jq
      $: 'jquery'
    }),
    new ExtractTextPlugin("css/[name].css"), //单独使用style标签加载css并设置其路径
    new webpack.optimize.UglifyJsPlugin({ //压缩代码
      compress: {
        warnings: false
      },
      except: ['$super', '$', 'exports', 'require'] //排除关键字
    }),
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      favicon: './src/img/favicon.ico', //favicon路径
      filename: '/view/xg/index.html', //生成的html存放路径，相对于 path
      template: './src/view/index.html', //html模板路径
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: true, //为静态资源生成hash值
      minify: { //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true //删除空白符与换行符
      }
    })
  ],
  devServer: {
    contentBase: './dist/view'
  }
};
