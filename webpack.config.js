var path = require('path');
var webpack = require('webpack');

module.exports = function(fabricatorConfig) {

  "use strict";

  var config = {
    entry: {
      'partystreusel/scripts/p': fabricatorConfig.src.scripts.fabricator
    },
    output: {
      path: path.resolve(__dirname, fabricatorConfig.dest, 'assets'),
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|prism\.js)/,
          loaders: ['babel'],
          presets: ['es2015', 'stage-2']
        }
      ]
    },
    plugins: [],
    cache: {}
  };

  if (!fabricatorConfig.dev) {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin()
    );
  }

  return config;
};
