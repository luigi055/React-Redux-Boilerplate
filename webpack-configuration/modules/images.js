const { ROOT_DIRECTORY } = require("../constants");

module.exports = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  loaders: [
    "url-loader?name=assets/images/[name].[ext]",
    {
      loader: "image-webpack-loader",
      options: {
        mozjpeg: {
          progressive: true
        },
        gifsicle: {
          interlaced: false
        },
        optipng: {
          optimizationLevel: 4
        },
        pngquant: {
          quality: "65-90",
          speed: 4
        }
      }
    }
  ],
  exclude: /node_modules/,
  include: ROOT_DIRECTORY
};
