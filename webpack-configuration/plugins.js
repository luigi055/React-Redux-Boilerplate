const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = argv => [
  new CleanWebpackPlugin({
    verbose: true,
    dry: false
  }),
  new ExtractTextPlugin("style.css"),
  new HTMLWebpackPlugin({
    title: "New Project",
    filename: "index.html",
    template: "index.html"
  }),
  new ManifestPlugin(),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(argv.mode)
    }
  })
];
