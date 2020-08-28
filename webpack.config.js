const path = require('path');
const CommentsToEachJs = require('./plugins/comments-to-each-js')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  plugins: [
    new CommentsToEachJs({
      author: ['urnotzane', 'jacklove'],
      date: true,
    })
  ]
}