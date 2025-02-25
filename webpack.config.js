import path, { dirname } from 'node:path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

export default {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(dirName, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:'[name].css',
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
  ],
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], 
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
        ],
      },
    ],
  },
};