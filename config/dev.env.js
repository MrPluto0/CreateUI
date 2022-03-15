module.exports = {
  transpileDependencies: true,
  productionSourceMap: true,
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      extensions: [".css"],
    },
  },
};
