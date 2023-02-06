const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  devtool: false,
  resolve: {
    alias: {},
  },
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test:/\.(jpg|png|gif)$/,
        loader:'url-loader', //只使用一个loader的使用可以这样写
        options:{
          publicPath:'./img',
          outputPath:'img/',
          limit:25*1024,
        }     
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from:  "static", to: "static" }],
    }),
  ],
  // 排除所有 node_modules 模块，
  // externals: [ nodeExternals() ],
};
