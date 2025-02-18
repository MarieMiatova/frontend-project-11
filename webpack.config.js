const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { dirname } = require('path'); // Импорт dirname

const dirName = dirname(__filename); // Используем __filename для получения пути к текущему файлу

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(dirName, 'dist'),
    filename: 'bundle.js', // Добавьте имя выходного файла
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css', // Определите имя для выходного CSS-файла
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html', // Убедитесь, что файл index.html будет создан
    }),
  ],
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/, // Исключаем node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Добавьте нужные библиотеки Babel
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
          MiniCssExtractPlugin.loader, // Используем MiniCssExtractPlugin.loader для извлечения CSS
          'css-loader',
        ],
      },
    ],
  },
};