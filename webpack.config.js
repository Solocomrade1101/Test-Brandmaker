const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
  watch: true,
  mode: 'development',
  entry: {
    filename: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    assetModuleFilename: 'assets/[name][ext][query]'
  },
  // performance: {
  //   hints: false,
  //   maxAssetSize: 512000,
  //   maxEntrypointSize: 512000
  // },
  plugins: [new MiniCssExtractPlugin({filename:'index.css'}), new HtmlWebpackPlugin({filename:'index.html', template: 'src/index.html'})],
  module:{
    
      rules: [
        {
          test: /\.css$/,
          use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true
            }
          }, 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(ttf|woff|woff2|eot)$/,
          // loader: 'file-loader',
          // options: {
          //   name: 'fonts/[name].[ext]'
          // }
        },
      ],
    },
    optimization: {
      minimize:false,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin(),
      ],
    },
    
  
}