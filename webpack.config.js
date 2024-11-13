"use strict";
require("dotenv").config();
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const serverPort = process.env.PORT

module.exports = {
  entry: ["core-js/stable", "regenerator-runtime/runtime", "./client/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // 這裡可以省略，因為已經有 .babelrc
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: [
      {
        context: ["/webauthn"],
        target: `http://localhost:${serverPort}`,
      },
    ],
    hot: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./client/public/index.html",
      favicon: "./client/public/favicon.ico",
    }),
  ],
  mode: "development",
  devtool: "inline-source-map",
};
