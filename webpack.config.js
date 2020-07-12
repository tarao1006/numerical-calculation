const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const nodeEnv = process.env.NODE_ENV || "development"

module.exports = {

  mode: "development",
  entry: path.resolve(__dirname, "frontend/src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules:[
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [[
              "@babel/preset-env", {
                useBuiltIns: "usage",
                corejs: 3
              }],"@babel/preset-react"]
          }
        },
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, "frontend/src/index.html")
      }
    ),
    new Dotenv(
      {
        path: {
          "development": path.resolve(__dirname, ".env"),
          "production": path.resolve(__dirname, ".env.production")
        }[nodeEnv],
        sysemvars: true
      }
    )
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
