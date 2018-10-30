const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use:{
        loader: 'babel-loader'
      }
    }]
  },
  watchOptions: {
    poll: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}