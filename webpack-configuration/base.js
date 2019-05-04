const path = require("path");
const handleDevelopmentEnvironment = require("./development/handle-development-environment");
const handlePlugins = require("./plugins");
const eslint = require("./modules/eslint");
const babel = require("./modules/babel");
const fonts = require("./modules/fonts");
const styles = require("./modules/styles");
const html = require("./modules/html");
const icons = require("./modules/icons");
const images = require("./modules/images");
const {
  BUILD_FILE_NAME,
  ROOT_DIRECTORY,
  SOURCE_FILE_NAME,
  FILE_NAME
} = require("./constants");

module.exports = () => (env, argv) => {
  const config = {
    context: path.resolve(ROOT_DIRECTORY, SOURCE_FILE_NAME),
    entry: ["./ClientApp.jsx"],
    output: {
      path: path.resolve(ROOT_DIRECTORY, BUILD_FILE_NAME),
      filename: FILE_NAME,
      publicPath: "/"
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"]
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true
    },
    module: {
      rules: [eslint, babel, icons, ...fonts, styles, images, html]
    },
    plugins: handlePlugins(argv)
  };

  handleDevelopmentEnvironment(argv, config);

  console.log(`!----YOU ARE IN ${argv.mode.toUpperCase()}----!`);
  return config;
};
