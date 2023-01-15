const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry:{
    main: { import: "./examples/vue/index.js", runtime: "common-runtime" },
  } ,
  mode: "development",
  devtool: false,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/vue"),
  },
  module: {
    rules: [
      { test: /\.vue$/, use: ["vue-loader"] },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './examples/vue/index.html',
    }),
  ],
  // 排除所有 node_modules 模块，
  // externals: [ nodeExternals() ],
};
