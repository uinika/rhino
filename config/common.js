const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

/** common config */
module.exports = {
  context: path.resolve(__dirname, '../sources'),
  entry: {
    app: './app.js',
    vendor: [
      'react', 'react-dom', 'react-router-dom', 'antd', 'axios',
      'jquery', 'lodash', 'moment',
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'assets/favicon.ico',
      template: 'index.html',
      filename: 'index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [
        'style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        'postcss-loader'
      ]
    }]
  }
};
