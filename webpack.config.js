
const nodeExternals = require('webpack-node-externals');
module.exports = {
  mode: "development",
  devtool: false,
  devServer: {
    hot: true,
    open: true,
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
