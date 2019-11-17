const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, 'src/character-thumbnail.js'),
  output: {
    filename: 'character-thumbnail.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'raw-loader',
          'sass-loader',
        ],
      },
    ],
  }
}
