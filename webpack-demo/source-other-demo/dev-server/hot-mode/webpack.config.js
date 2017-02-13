var path = require("path");
// webpack 编译的output 路径为 path + filename
// 请求静态资源虚拟路径地址 publicPath + filename
module.exports = {
  entry: ["webpack/hot/dev-server", "./entry.js"],
  output: {
    path: path.join(__dirname, "build2"),
    // 静态资源虚拟路径地址 publicPath + filename
    publicPath: "public/assets/",
    filename: "bundle.js"
  }
};