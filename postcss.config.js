module.exports = {
  plugins: [
    require("postcss-preset-env"),
    require("tailwindcss")("./tailwind.config.js"),
    //require("cssnano"),
  ],
};
