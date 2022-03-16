const { resolve } = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      preferRelative: true,
      alias: {
        packages: resolve(__dirname, "../packages"),
      },
    },
  },
};
