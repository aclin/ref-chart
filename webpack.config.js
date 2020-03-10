const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');

module.exports = function() {
  // const target = env.TARGET || 'LOCAL';
  
  return { 
  entry: {
    babel: '@babel/polyfill',
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(gif|png|jpg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            }
          }
        ],
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },      
      
    ]
  },
  resolve: {
    modules: ['./src', path.resolve('./src'), path.resolve('./node_modules')]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: "./src/index.html",
      filename: './index.html', //relative to root of the application
      chunks: ["babel", "main"]
    }),
    // new FaviconsWebpackPlugin('./src/static/favicon-1024x1024.png'),
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   template: "./src/static/authredirect.html",
    //   filename: "./authredirect",
    //   chunks: ["babel", "authredirect"]
    // }),
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   template: "./src/static/403.html",
    //   filename: "./403",
    //   chunks: []
    // }),
    // new webpack.NormalModuleReplacementPlugin(
    //   /(.*)-TARGET(\.*)/,
    //   function(resource){
    //     resource.request = resource.request.replace(/-TARGET/,`-${target}`);
    //   }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
  };
}

