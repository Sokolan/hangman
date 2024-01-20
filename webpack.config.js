const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "hangman",
      template: './src/index.html',
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        include: [
          path.resolve(__dirname, './src/style'),
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        include: [
          path.resolve(__dirname, './src/fonts'),
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
