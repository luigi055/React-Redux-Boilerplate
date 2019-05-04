const webpack = require("webpack");

const developmentServer = require("./dev-server");
const { DEVELOPMENT_PORT, BUILD_FILE_NAME } = require("../constants");

function handleDevelopmentEnvironment(argv, config) {
  // Activating hot module replacement in development
  const configuration = config;
  if (argv.mode === "development") {
    configuration.entry.unshift(
      "react-hot-loader/patch",
      `webpack-dev-server/client?http://localhost:${DEVELOPMENT_PORT}`,
      "webpack/hot/only-dev-server"
    );
    configuration.plugins.unshift(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    );
    configuration.devServer = developmentServer(
      BUILD_FILE_NAME,
      DEVELOPMENT_PORT
    );
    configuration.devtool = "cheap-module-eval-source-map";
  }
}

module.exports = handleDevelopmentEnvironment;
