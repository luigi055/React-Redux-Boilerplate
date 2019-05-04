const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  test: /.css$/,
  loader: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
      {
        loader: "css-loader",
        options: {
          sourceMap: true
        }
      },
      {
        loader: "resolve-url-loader",
        options: {
          sourceMap: true
        }
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: true
        }
      }
    ]
  })
};
