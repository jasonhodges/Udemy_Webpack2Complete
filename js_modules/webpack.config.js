const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), // double underscore in node.js ref to cwd 
    filename: 'bundle.js'
  }
};

module.exports = config;