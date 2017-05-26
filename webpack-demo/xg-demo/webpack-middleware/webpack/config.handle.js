var xgConfig = require('../xg.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var configEntry = xgConfig.webpack.entrys || {};
var rootProjectName = xgConfig.rootProjectName;
var _ = require('lodash');

function entrysLog(webpackEntry) {
  console.log('================start webpack modules================');
  var webpackEntryArr = Object.keys(webpackEntry);
  if (webpackEntryArr.length > 0) {
    for (var i = 0; i < webpackEntryArr.length; i++) {
      console.log(webpackEntryArr[i] + " ====> " + webpackEntry[webpackEntryArr[i]]);
    }
  } else {
    console.log('not entrys');
  }
  console.log('================start webpack modules================');
}

module.exports = {
  getModules: function () {
    var modules = process.env.ENTRY_MODULES ? JSON.parse(process.env.ENTRY_MODULES) || [] : [];
    var webpackEntry = {};
    if (modules.length == 0) {
      modules = Object.keys(configEntry);
    }
    for (var i = 0; i < modules.length; i++) {
      var module = modules[i];
      var entry = configEntry[module];
      if (entry) {
        var webpackEntryKey = entry.replace('${rootProjectName}/', '');
        var webpackEntryValue = entry.replace('${rootProjectName}', rootProjectName);
        webpackEntry[webpackEntryKey] = './' + webpackEntryValue;
      }
    }
    return webpackEntry;
  },
  getStartEntrys: function () {
    var webpackEntry = this.getModules();
    entrysLog(webpackEntry);
    return webpackEntry
  },
  getWebpackEntrys: function () {
    var webpackEntrys = {};
    var modules = this.getModules();
    var env = process.env.NODE_ENV;
    var refreshHot = xgConfig.webpack.refreshHot;
    var refreshHotCode = "webpack-hot-middleware/client?reload=true";
    var modulesArr = Object.keys(modules);
    if (modulesArr.length > 0) {
      for (var i = 0; i < modulesArr.length; i++) {
        var entryValue = '';
        if (refreshHot && env == 'development') {
          entryValue = [refreshHotCode, modules[modulesArr[i]]];
        } else {
          entryValue = modules[modulesArr[i]];
        }
        webpackEntrys[modulesArr[i]] = entryValue
      }
    }
    return webpackEntrys;
  },
  getWebpackDevConfig: function () {
    var webpackDevConfig = require('./webpack.dev.config.js');
    webpackDevConfig['entry'] = this.getWebpackEntrys();
    return webpackDevConfig;
  },
  getWebpackProdConfig: function () {
    var webpackProdConfig = require('./webpack.prod.config.js');
    var webpackEntrys = this.getWebpackEntrys();
    entrysLog(webpackEntrys);
    webpackProdConfig['entry'] = webpackEntrys;
    var plugins = webpackProdConfig.plugins || [];

    var webpackEntrysKeyArr = Object.keys(webpackEntrys);
    if (webpackEntrysKeyArr.length > 0) {
      for (var i = 0; i < webpackEntrysKeyArr.length; i++) {
        ////根据模板插入css/js等生成最终HTML
        var htmlWebpackPluginTpl = {
          title: 'My App',
          // favicon: './client/img/favicon.ico', //favicon路径
          filename: './creditcard/bank_cbc/index.html', //生成的html存放路径，相对于 path
          template: './bin/index.template.html', //html模板路径
          inject: true, //允许插件修改哪些内容，包括head与body
          hash: true, //为静态资源生成hash值
          minify: { //压缩HTML文件
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: true //删除空白符与换行符
          },
          chunks: []
        };

        var key = webpackEntrysKeyArr[i];
        var value = webpackEntrys[key];
        console.log(key);
        if (key == 'creditcard/bank_cbc') {
          htmlWebpackPluginTpl['template'] = './bin/index.template2.html';
        }
        if (key) {
          htmlWebpackPluginTpl['filename'] = "./" + key + "/index.html"
          var chunks = htmlWebpackPluginTpl['chunks'] || [];
          chunks.push(key);
          plugins.push(new HtmlWebpackPlugin(htmlWebpackPluginTpl));
        }
      }

    }
    return webpackProdConfig;
  },
  getZipPath: function () {
    var webpackEntry = this.getModules();
    console.log('zip zip', webpackEntry);
  }
}