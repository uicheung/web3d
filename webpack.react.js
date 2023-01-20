const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry:{
    main: { import: "./examples/react/App.jsx" },
  } ,
  mode: "development",
  devtool: false,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        options: {
          "presets": [
            ["@babel/preset-react", {
              "runtime": "automatic"
            }]
          ]
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/react/index.html',
    }),
  ],
  // 排除所有 node_modules 模块，
  // externals: [ nodeExternals() ],
};
