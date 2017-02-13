#webpack.ProvidePlugin
```
plugins: [
    //这个可以使jquery变成全局变量，妮不用在自己文件require('jquery')了
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "root.jQuery": "jquery"
    })
  ],
  externals: {
    // require("jquery") 是引用自外部模块的
    // 对应全局变量 jQuery
    "jquery": "jQuery"
  },
```
