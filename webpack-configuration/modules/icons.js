module.exports = {
  test: /\.ico|txt$/,
  use: [
    {
      loader: "static-files-loader"
    }
  ]
};
