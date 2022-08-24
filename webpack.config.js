const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  entry: ['react-hot-loader/patch', './src'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              publicPath: '../',
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, './src/assets/scss/utils/_variables.scss'),
                path.resolve(__dirname, './src/assets/scss/utils/_mixins.scss'),
              ],
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader', 'file - loader'],
      },
      {
        test: /\.(js|jsx)$/,
        use: 'react-hot-loader/webpack',
        include: /node_modules/,
      },
    ],
  },
  devServer: {
    port: 3005,
    proxy: {
      '/index/stage/v1/': {
        target: 'https://24h.pchome.com.tw',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/index/stage/v1/': '/index/stage/v1/',
        },
      },
    },
    hot: 'only',
    static: {
      directory: path.join(__dirname, './'),
      serveIndex: true,
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/index.html', to: 'assets/images', noErrorOnMissing: true }],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
}

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].js'
  }

  return config
}
