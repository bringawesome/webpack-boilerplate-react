const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const PORT = 3000;
const bundleFolder = "/dist";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, bundleFolder),
    filename: "index.bundle.js",
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]", // Extract all the images and fonts in an assets/ directory***
  },
  devServer: {
    port: PORT,
    hot: true, // hotreloading***
  },
  devtool: "source-map", // Debugging original CSS/SCSS files in the browser***
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
        type: "asset/resource", // Remove <resource> if you want to webpack decide to create inline base64 encoded for small images, less than 8 KB***
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" }, // With this option, webpack can adjust the url("") path of the images in the CSS output file***
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
    new FaviconsWebpackPlugin({
      logo: __dirname + "/favicon.png",
      favicons: {
        background: "#333",
        theme_color: "#f5deb2",
        icons: {
          favicons: true,
          coast: false,
          yandex: false,
          android: false,
          appleIcon: false,
          appleStartup: false,
          windows: false,
          firefox: false,
        },
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"], // With this you will not need to type the file extension when importing jsx or js files***
  },
};

/*
 * I am not using <HtmlWebpackPlugin> but <file-loader> to keep
 * track of <index.html>
 * To do that i added this line of code:
 * require("file-loader?name=[name].[ext]!./index.html");
 * in the <index.js> file
 * 
 * If you want to use the plugin:
 plugins: [
    new MiniCssExtractPlugin({
      filename: "main.bundle.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    })
  ],
 */
