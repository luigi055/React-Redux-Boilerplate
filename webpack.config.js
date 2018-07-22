const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const devPORT = 3000;
const publicFile = "public";

module.exports = (env, argv) => {
  const config = {
    context: path.resolve(__dirname, "src"),
    entry: ["babel-polyfill", "./ClientApp.jsx"],
    output: {
      path: path.resolve(__dirname, publicFile),
      filename: "bundle.js",
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
      rules: [
        {
          enforce: "pre",
          test: /\.jsx?$/,
          loader: "eslint-loader",
          exclude: /node_modules/
        },
        {
          test: /.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: "babel-loader"
            }
          ] // end use
        }, // end .jsx? rule
        {
          test: /\.ico|txt$/,
          use: [
            {
              loader: "static-files-loader"
            }
          ]
        },
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
        }, // end ttf , eot and svg test
        {
          test: /.s?css$/,
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
                loader: "postcss-loader",
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
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }, // end scss loader
        {
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
          include: __dirname
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        }
      ] // end rules Array
    }, // end module Object
    plugins: [
      new CleanWebpackPlugin([path.resolve(__dirname, "public")], {
        root: path.resolve(__dirname),
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
    ]
  };

  // Activating hot module replacement in development
  if (argv.mode === "development") {
    config.entry.unshift(
      "react-hot-loader/patch",
      `webpack-dev-server/client?http://localhost:${devPORT}`,
      "webpack/hot/only-dev-server"
    );
    config.plugins.unshift(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    );
    config.devServer = {
      contentBase: path.join(__dirname, publicFile),
      compress: true,
      hot: true,
      port: devPORT,
      clientLogLevel: "none",
      historyApiFallback: true,
      open: true,
      openPage: "" // Avoid /undefined bug
    };
    config.devtool = "cheap-module-eval-source-map";
  }
  console.log(`!----YOU ARE IN ${argv.mode.toUpperCase()}----!`);
  return config;
};
