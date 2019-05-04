const path = require("path");

function rootDirectory() {
  return path.resolve(__dirname, "..");
}

module.exports = {
  DEVELOPMENT_PORT: 3000,
  BUILD_FILE_NAME: "dist",
  ROOT_DIRECTORY: rootDirectory(),
  SOURCE_FILE_NAME: "src",
  FILE_NAME: "bundle.js"
};
