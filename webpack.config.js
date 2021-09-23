const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PORT = 3000;
const bundleFolder = "/dist";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, bundleFolder),
    filename: "index.bundle.js",
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]", // This is to extract all the images and fonts in an assets directory***
  },
  devServer: {
    port: PORT,
    hot: true, // hotreloading***
  },
  devtool: "source-map", // Debugging original css / scss files in the browser***
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
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource", // remove resource for automatic webpack decide to create base64 encoded images <-- for small images, less than 8 KB***
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" }, // With this option, webpack can adjust the url() of the images in Css/Scss in the output file***
          },
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          "postcss-loader",
          "sass-loader", // loaders order is important***
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.bundle.css",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"], // You will not need to type the file extension when importing jsx or js files***
  },
};

/*
 * I am not using HtmlWebpackPlugin but I am using file-loader to keep
 * track of <index.html> and put this line of code in <index.js>
 * require("file-loader?name=[name].[ext]!./index.html");
 * 
 * Using the plugin:
 plugins: [
    new MiniCssExtractPlugin({
      filename: "main.bundle.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    })
  ],
 */
