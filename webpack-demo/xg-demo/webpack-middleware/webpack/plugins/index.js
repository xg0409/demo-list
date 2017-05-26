function MyPlugin(options) {
  // Configure your plugin with options...
}



MyPlugin.prototype.apply = function (compiler) {
  // ...
  compiler.plugin('compilation', function (compilation) {
    console.log('The compiler is starting a new compilation...');

    compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
      htmlPluginData.html += 'The magic footer';
      callback(null, htmlPluginData);
    });
    compilation.plugin('html-webpack-plugin-alter-asset-tags', function (htmlPluginData, callback) {
      // console.log('xgxg', compilation, htmlPluginData.plugin.options, htmlPluginData, callback);
      callback(null, htmlPluginData);
    });
  });

};

module.exports = MyPlugin;