var path = require('path');
var webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/main.ts'
  ],
  output: {
    path: '/',
    publicPath: '/dist/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this nessessary.
            'scss': 'vue-style-loader!css-loader!postcss-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax',
            'less': 'vue-style-loader!css-loader!postcss-loader!less-loader'
          },
          esModule: true
        }
      },
      {
        test: /\.(t|j)s$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/, /\.json$/],
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      },
      {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
      },
      {
          test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
          loader: 'file-loader'
      },
      {
          test: /\.md$/,
          loader: 'html-loader!markdown-loader'
      },
      {
        test: /\.tour/,
        loader: 'json-loader!./loaders/tour-loader.js'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  devServer: {
    hot: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new WebpackShellPlugin({
      onBuildStart: ['node deref_schema.js src/assets/']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
  ]
}
