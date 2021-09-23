module.exports = {
  plugins: [
    require("postcss-preset-env"),
    require("tailwindcss")("./tailwind.config.js"),
    //require("cssnano"), // --> uncomment this line of code if you want to minify the css output file
  ],
};
