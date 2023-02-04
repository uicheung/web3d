
module.exports = {
  mode: "development",
  devtool: false,
  resolve: {
    alias: {

    },
  },

  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  // 排除所有 node_modules 模块，
  // externals: [ nodeExternals() ],
};
