module.exports = {
  test: /.jsx?$/,
  exclude: /(node_modules|bower_components)/,
  use: [
    {
      loader: "babel-loader"
    }
  ]
};
