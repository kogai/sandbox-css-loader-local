const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

const projectRoot = path.resolve(__dirname);
const input = path.resolve(projectRoot, "src");
const output = path.resolve(projectRoot, "dist");

module.exports = {
  mode: "development",
  devtool: "source-map",
  context: input,
  entry: "./app.js",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            query: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin([output])]
};
