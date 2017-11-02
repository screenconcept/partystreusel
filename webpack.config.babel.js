import path from 'path';
import webpack from 'webpack';

module.exports = () => {
  let config = {};

  config = {
    entry: {
      main: './components/main.js',
      polyfills: './components/polyfills.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './public/js/'),
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          loaders: ['babel-loader', 'eslint-loader'],
          exclude: [/node_modules/],
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
    },
    plugins: [],
  };

  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  }

  return config;
};
