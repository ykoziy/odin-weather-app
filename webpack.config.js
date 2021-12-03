const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin({
            extractComments: false,
            terserOptions: {
                keep_classnames: true
            }
          })
        ]
  },
};