const path = require('path');

const APP_DIR = path.resolve(__dirname, './src');

module.exports = {
  // entry: path.resolve(__dirname, './src/index.js'),
  entry: [
    "@babel/polyfill", APP_DIR + '/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // {
      //   test: /(\.css|.scss)$/,
      //   use: [{
      //     loader: "style-loader" // creates style nodes from JS strings
      //   }, {
      //     loader: "css-loader" // translates CSS into CommonJS
      //   }]
      // }
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  // devServer: {
  //   contentBase: path.resolve(__dirname, './public'),
  // },
};