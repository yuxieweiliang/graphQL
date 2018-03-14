const webpack = require('webpack');
const path = require('path');
const publicPath =path.resolve(__dirname, './build');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: {
    home: path.join(__dirname, './src/home'),
    products: path.join(__dirname, './src/products'),
    enterprise: path.join(__dirname, './src/enterprise'),
    vendors: ['react', 'react-dom', 'react-weui']
  },
  output: {
    path: publicPath, // 也可以使用 publicPath
    filename: '[name].build.js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    // 定义了解析模块路径时的配置，常用的就是extensions，可以用来指定模块的后缀，这样在引入模块时就不需要写后缀了，会自动补全
    extensions: ['.js', '.jsx', '.es6', '.less'],
    alias: {
      // moment: "moment/min/moment-with-locales.min.js" // 为路径设置别名
      //'type': path.resolve(rootDir, './lib/jquery.min.js')
    }
  },
  module: {
    loaders: [
      {test: /\.js|.jsx$/,use: ['babel-loader']},
      // css
      {test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:[{
            loader:"css-loader"
          },{
            loader:"postcss-loader"
          }]
        })
      },

      // 处理less
      {
        test: /\.less$/,use: ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:[{
            loader:"css-loader"
          },{
            loader:"postcss-loader"
          },{
            loader:"less-loader"
          }]
        })
      },
      {test: /\.jade$/,loader: 'jade'},
      {test: /\.(jpg|png)$/,loader: 'url?limit=8192'},

      // 处理字体文件
      {
        test: /\.(woff|woff2ttf|eot|otf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 3048,
            name: '[name].[ext]'
          }
        }]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['./build/'], {
      verbose: true,
      dry: false,
    }),
    new ExtractTextPlugin('[name].css'),

    /*new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
      chunks: ['vendors', 'home']
    })*/
    // 抽取公用脚本
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendors'],
      filename: 'vendors.js',
      minChunks: Infinity,
    }),

    /*new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })*/
  ],

  // 如果命令行中配置了--port 则会优先命令行
  /*devServer: {
    hot: true, // 告诉 dev-server 我们在使用 HMR
    contentBase: publicPath,
    port: 8081,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: '/'
  }*/
};


module.exports = config;