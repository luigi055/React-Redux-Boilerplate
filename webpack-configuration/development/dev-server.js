const path = require("path");

const webpackDevServer = (buildFile, port) => ({
  contentBase: path.join(__dirname, buildFile),
  compress: true,
  hot: true,
  port,
  clientLogLevel: "none",
  historyApiFallback: true,
  open: true,
  openPage: "" // Avoid /undefined bug
});

module.exports = webpackDevServer;
