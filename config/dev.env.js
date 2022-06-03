const { resolve } = require("path");

module.exports = {
  transpileDependencies: true,
  productionSourceMap: true,
  devServer: {
    port: 8080,
    host: "localhost",
    https: false,
    open: true,
  },
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      preferRelative: true,
      alias: {
        packages: resolve(__dirname, "../packages"),
      },
    },
  },
};