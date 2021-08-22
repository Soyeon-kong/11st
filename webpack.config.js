const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve } = require('path')

module.exports = {
    mode:'none',
    entry: {
      router: './router.js',
      app: './index.js'
    },
  
    output: {
      path: resolve(__dirname, './dist'),
      filename: '[name].js'
    },
  
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html'
      }),
      new MiniCssExtractPlugin({ filename: 'app.css' }),
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist']
      })
    ],
    module: {
      rules: [
        {
          test: /\.hbs$/,
          loader: 'handlebars-loader'
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.(jpg|jpeg|png|gif)$/,
          use: [{
            loader: 'file-loader',
            options: {
              publicPath: './dist/',
              name: '[name].[ext]',
            }
          }]

        },
      ]
    }
  }