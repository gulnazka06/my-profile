const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  entry: ['./src/styles.scss'],
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css',
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader?-url'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ],
  },
};
