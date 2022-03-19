const { VueLoaderPlugin } = require("vue-loader");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: resolve(__dirname, "../example/main.js"),
  output: {
    path: resolve(__dirname, "../dist"),
    filename: "bundle.js",
  },
  devServer: {
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
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
          limit: 10 * 1024,
        },
      },
      {
        test: /\.(mp3|mp4|ogg)$/,
        loader: "url-loader",
        options: {
          limit: 10 * 1024,
        },
      },
      {
        test: /(\.(eot|ttf|woff|woff2|otf)|font)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../example/index.html"),
      filename: "index.html",
    }),
  ],
  resolve: {
    alias: {
      packages: resolve(__dirname, "../packages"),
    },
    extensions: [".js", ".vue", ".json"],
  },
};
