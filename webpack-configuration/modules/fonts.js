module.exports = [
  {
    test: /\.otf|woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: [
      {
        loader: "url-loader",
        options: {
          name: "assets/fonts/[name].[ext]"
        }
      }
    ]
  }, // end otf, woff and woff2 test
  {
    test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "assets/fonts/[name].[ext]"
        }
      }
    ]
  }
];
