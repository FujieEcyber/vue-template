const webpack = require("webpack");
const path = require('path');

module.exports = {
  entry: ['./vue/main.js'],
  output: {
    path: __dirname + 'dist/',
    filename: 'app.js',
        publicPath: '/',
  },
  module: {
    loaders: [

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          buble: {
            objectAssign: 'Object.assign',
          }
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'stage-2','stage-3']
        },
      },
      {
          test: /\.css$/,
          loader: 'vue-style-loader!css-loader'
        },
        // Font awesome loader.
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: path.posix.join('./js/font-awesome', 'fonts/[name].[ext]')
          }
        },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=image/svg+xml' },
        { test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=application/font-woff' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=application/font-woff' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=application/font-woff' }
    ]
  },
  plugins: [
	    // Jquery loader plugin.
	    new webpack.ProvidePlugin({
	      $: "jquery",
	      jQuery: "jquery"
	    })
  ],
  resolve: {
    extensions: ['.','.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  }
}