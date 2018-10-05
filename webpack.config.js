const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <title>k8-test</title>
            <script src="https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js"></script>
          </head>
          <body>
            <div id="root" />
          </body>
        </html>
      `,
    }),
  ],
};
