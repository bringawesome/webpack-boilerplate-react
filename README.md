# React Webpack Boilerplate Project ![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)

Basic starter project for building React apps with Webpack / Babel / Postcss (plugins -> postcss-preset-env for autoprefixing and browser support & Cssnano for CSS minification).

### Clone the project

```bash
git clone https://github.com/toniG-78/react-webpack-boilerplate-project.git
```

### Install dependencies

```
npm install
```

### Run dev server http://localhost:3000

```
npm run serve
```

### Build for development

```
npm run dev-build
```

### Build for production

```
npm run build
```

### Remove `dist/` folder

```
npm run clean
```

## Features:

- [Webpack](https://webpack.js.org/) (v5).
- ES6 Support - [Babel](https://babeljs.io/) (v7).
- [SCSS](https://sass-lang.com/) (dart-sass).
- [PostCss](https://postcss.org/) (autoprefixing-minify CSS).
- Dev server with hotreloading.
- Debug your original CSS/SCSS files in the browser.
- In production mode the output CSS is moved to a separate file.
- In production mode the assets (images, fonts) are moved to a separate folder.
- Generate favicons and their associated files.

## Notes:

- The CSS output file is included in the header of the `index.html`

- The JavaScript output file is included in the body of the `index.html`

- All your assets are moved to an `assets/` folder.

- Go to `webpack.config.js` and configure which icons / metadata will be generated, refer to [favicons]("https://github.com/jantimon/favicons-webpack-plugin") and [favicons-webpack-plugin]("https://github.com/jantimon/favicons-webpack-plugin") documentation.

- Go to the terminal and run `npm run dev-build` it will output the JavaScript and CSS bundle in a more readable format for development or debugging.

- Open `.browserslistrc` and configure which browsers should be supported in your app.

- Open `webpack.config.js` and change the settings or add all the plugins you need. For example, comment out this line `devtool:"source-map"` if you don't want to debug your original CSS/SCSS files in the browser or in production mode. This will also not generate the source map files `main.bundle.css.map` , `index.bundle.js.map` in the `dist/` folder

- Open `postcss.config.js` and uncomment this line of code `require("cssnano")` if you want to minify the CSS output file.
