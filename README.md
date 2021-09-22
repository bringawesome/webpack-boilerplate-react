# React Webpack Boilerplate Project ![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)

Basic starter project for building React apps with Webpack / Babel / Postcss / Sass / Tailwind

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

### Build for dev

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

- Webpack (v5).
- ES6 Support - babel (v7).
- SCSS (dart-sass).
- Postcss - Autoprefixing - Cssnano.
- Tailwind CSS framework.
- Dev server with hotreloading.
- Debug your original css / scss files in the browser.
- In production mode the css is moved to a separate file. The css file is included in the header of the index.html.
- In production mode the images are moved to a separate folder.

## Notes:

- `npm run dev-build` it will output js bundles in a more readable format for development or debugging.

- Go to `webpack.config.js` and change the settings or add all the plugins you need. For example, comment out this line `devtool:"source-map"` if you don't want to debug your original css / scss files in the browser or in production mode.
