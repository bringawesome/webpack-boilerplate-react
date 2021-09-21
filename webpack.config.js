const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PORT = 3000;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    port: PORT,
    hot: true, // hotreloading
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader", // order is important!
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.bundle.css",
    }),
  ],
};
