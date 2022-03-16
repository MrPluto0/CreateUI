const path = require("path");
const fs = require("fs");
const resolve = (dir) => path.join(__dirname, "../", dir);

// double build for this plugin will cause port error
// const BundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  outputDir: resolve("lib"),
  configureWebpack: {
    entry: getComponentEntries("packages"),
    output: {
      filename: "[name].js",
      library: "create-ui",
      libraryTarget: "umd",
      libraryExport: "default",
    },
    // exclude 'vue'
    externals: {
      vue: {
        root: "Vue",
        commonjs: "vue",
        commonjs2: "vue",
        amd: "vue",
      },
    },
    resolve: {
      extensions: ["", ".js", ".vue"],
    },
    // plugins: [new BundleAnalyzer()],
  },
  // extract css from file
  css: {
    extract: {
      filename: "theme/[name].css",
    },
  },
  // delete some build resource
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config.entryPoints.delete("app");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.plugins.delete("html");
    config.plugins.delete("copy");
    config.plugins.delete("hmr");
  },
};

function getComponentEntries(dir) {
  let entries = {};
  let files = fs.readdirSync(resolve(dir));

  files.forEach((file) => {
    const filepath = path.join(dir, file);
    const isDir = fs.statSync(resolve(filepath)).isDirectory();
    const [name, suffix] = file.split(".");

    if (isDir) {
      entries[name] = resolve(path.join(filepath, "index.js"));
    } else if (suffix === "js") {
      entries[name] = resolve(filepath);
    }
  });

  return entries;
}
