function MyPlugin(options) {
  // 設定參數
  this.options = options
}

MyPlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function() {
    // 當 plugin 安裝完成就會...
    console.log('Hello World!');
  })

  // 我們自然需要拿到編譯的結果
  compiler.plugin("compilation", function(compilation) {

    compilation.plugin("optimize", function() {
      console.log("Assets are being optimized.");
    });
  });
}

module.exports = MyPlugin;
