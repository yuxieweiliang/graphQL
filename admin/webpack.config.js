const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
/*
const ManifestPlugin = require('webpack-manifest-plugin');*/
const publicPath = path.resolve(__dirname, 'dist');
const ROOTS = process.cwd();

const config = {
  // 坑爹的输出文件顺序竟然是按照字母排序来的
  entry: {
    /*'js/index': './src/router'*/
   /* 'js/app': './src/home',
    'js/product': './src/product',*/
    // 将所有公用的东西都放在一个文件里
    // common: ['react', 'react-dom']
  },
  // 输出文件
  output: {
    filename: '[name].js',
    path: publicPath
  },
  //devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.scss', '.js', '.jsx', '.htm', '.json', '.html', '.es6'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(js|es6|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      // 打包css
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // 处理less
      {
        test: /\.less$/,
        use: ['style-loader','css-loader','less-loader']
      },

      // 打包图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // 加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  /**
   * 配置外部访问的公共代码
   */
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    // 输出一个资源映射的json 似乎没有什么卵用
    /*new ManifestPlugin({
      fileName: 'manifest.json'
    }),*/
    // 清除dist下的文件
    // 每次编译的时候，将之前编译的清空
   new CleanWebpackPlugin(['dist']),
    /*new HtmlWebpackPlugin({
      title: '美丽故事',
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
    }),*/
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: "js/common.js",
      minChunks: Infinity,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],

  // 如果命令行中配置了--port 则会优先命令行
  devServer: {
    hot: true, // 告诉 dev-server 我们在使用 HMR
    contentBase: publicPath,
    port: 7777,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: '/'
  }
};
let pageArr = ['index', 'enterprise', 'login', 'product', 'product-add', 'recruit', 'register']
//
pageArr.map(item => {
  let plugins = new HtmlWebpackPlugin({
      title: item,
      filename: item + '.html',
      template: 'index.html',
      inject: 'body',
      chunks: ['common', 'js/' + item]
    })

  config.entry['js/' + item] =  './src/page/' + item
  config.plugins.push(plugins)
})

// 'js/index': './src/router'
console.log(config.entry)

module.exports = config;
























