var path = require('path')

module.exports = {
  entry: {
    bundle: ['./src/index.js']
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
  ]
  },
  resolve: {
    extensions: ['', '.json', '.js'],
  }
}
