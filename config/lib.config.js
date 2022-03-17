const path = require("path");
const fs = require("fs");
const resolve = (dir) => path.join(__dirname, "../", dir);

const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: getComponentEntries("packages"),
  output: {
    path: resolve("lib"),
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
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: "url-loader",
        options: {
          limit: 10240,
        },
      },
      {
        test: /(\.(eot|ttf|woff|woff2|otf)|font)$/,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".vue"],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "theme/[name].css",
      chunkFilename: "[id].css",
    }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ],
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
