const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    )
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
