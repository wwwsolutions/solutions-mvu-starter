![wwwsolutions logo](/src/assets/images/wwwsolutions-poster.png)

# Webpack ES6 Starter Project w/ MVU architecture

A modular front-end boilerplate using the power and simplicity of MVU architecture, Webpack 4 + HMR, and ES6+ via Babel.  Includes `Webpack's Tree Shaking` configuration. Utilizing functional javascript paradigm, BEM and mobile-first responsive approach. It's suitable for scalable applications.

The provided boilerplate is powered by the following technology stack:

### Bundlers & task runners

- [x] [npm](https://www.npmjs.com/) — package manager and task runner.
- [x] [Webpack 4](https://www.npmjs.com/package/webpack/) — module bundler.
- [x] [Gulp 4](https://www.npmjs.com/package/gulp/) — task runner.

### Linters
  
- [x] [ESLint](http://eslint.org/docs/user-guide/configuring/) — modern linter that helps you avoid errors and enforce conventions in your styles.
- [x] [StyleLint](https://www.npmjs.com/package/stylelint/) — reporter for syntax and style issues.

### Transpilers

- [x] [Babel 7](https://babeljs.io/) — transpiler from ES6 to ES5.

### CSS ecosystem

- [x] [PostCSS](http://postcss.org/) — ecosystem of custom plugins and tools aimed at transforming extended syntaxes and features into modern, browser-friendly CSS.
  > PostCSS plugins: `build-utils/postcss/postcss.config.js`
  - [x] [postcss-import](https://github.com/postcss/postcss-import)
  - [x] [postcss-map](https://www.npmjs.com/package/postcss-map)
  - [x] [postcss-bem-fix-fdruide'](https://www.npmjs.com/package/postcss-bem-fix-fdruide)
  - [x] [postcss-mixins](https://github.com/postcss/postcss-mixins)
  - [x] [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars)
  - [x] [postcss-nested](https://github.com/postcss/postcss-nested)
  - [x] [postcss-utilities](https://ismamz.github.io/postcss-utilities/docs)
  - [x] [postcss-jsmath](https://github.com/naaspati/postcss-jsmath)
  - [x] [postcss-calc](https://github.com/postcss/postcss-calc)
  - [x] [postcss-atroot](https://www.npmjs.com/package/postcss-atroot)
  - [x] [postcss-selector-not](https://github.com/postcss/postcss-selector-not)
  - [x] [postcss-extend](https://github.com/travco/postcss-extend)
  - [x] [lost](http://lostgrid.org/docs)
  - [x] [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
  - [x] [postcss-color-function](https://github.com/postcss/postcss-color-function)
  - [x] [postcss-media-fn](https://github.com/jonathantneal/postcss-media-fn)
  - [x] [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes)
  - [x] [postcss-nano](https://www.npmjs.com/package/cssnano)
  - [x] [postcss-reporter](https://github.com/postcss/postcss-reporter)
  
- [x] [Tachyons](https://www.npmjs.com/package/tachyons/) — functional CSS library.

### JavaScript ecosystem

- [x] [jQuery](https://www.npmjs.com/package/jquery/) — javascript library.
- [x] [Waypoints](https://www.npmjs.com/package/waypoints/) — javascript library that makes it easy to execute a function whenever you scroll to an element.
- [x] [Ramda](https://www.npmjs.com/package/ramda/) — javascript functional library.
- [x] [Hyperscript Helpers](https://github.com/ohanhi/hyperscript-helpers/) — terse syntax for hyperscript.
- [x] [Virtual DOM](https://www.npmjs.com/package/virtual-dom/) — a javascript DOM model supporting element creation, diff computation and patch operations for efficient re-rendering.

### Templates

- [x] [Ejs](https://www.npmjs.com/package/ejs/) — embedded JavaScript templates.

&nbsp;

## Quick start

### Clone the project using the following command:

```sh
git clone https://github.com/wwwsolutions/wwwsolutions-mvu-starter app-name
cd app-name
npm install
```

### Run development:

```sh
npm run dev
```

### Run production:

```sh
npm run prod
```

### Run production server:

```sh
npm run prod:serve
```

### Prerequisites

Support for Node.js > 8

### White Label It

- Update name, description, author, repository in `package.json`
- Update app title in [`build-utils/options/htmlWebpackPluginOptions.js`](/build-utils/options/htmlWebpackPluginOptions.js)

&nbsp;

## Expose App on Your Local Dev Machine

Assign yourself a unique publicly accessible url that will proxy all requests to your locally running webserver.

```sh
npm install -g ngrok
npm run tunnel # run in a new tab
```

You will receive a url, for example `https://439bf560.ngrok.io`, that you can share with anyone. Any requests will be routed to your local service at the specified port.

### What's happening under the hood when I run `npm run dev`?

Webpack serves your app in memory when you run `npm run dev`. No physical files are written. However, the web root is `/src`, so you can reference files under `/src` in index.html. 

### What's happening under the hood when I run `npm run prod`?

When the app is built using `npm run prod`, physical files are written to `/dist` folder and the app is served from `/dist` with command `npm run prod:serve`.

### How do I deploy this?

`npm run prod`. This will prepare and build the project for production use. It does the following:

- Minifies all JS and CSS
- Inline base64 URLs for images and fonts if their size is less than specified limit
- Places the resulting built project files into `/dist` directory. (This is the folder you'll expose to the world).

&nbsp;

## Gulp Tasks

> This task takes multiple svg files from `src/assets/icons` and generates single sprite file in `src/assets/sprites/`.
> Also generates a CSS file `src/styles/postcss/generated/_sprite.css` from  template `gulp/templates/sprite`.
> To use it, add `class="icon .icon--*"` into your html.

```sh
npm run gulp:icons
```

> A custom build of Modernizr for feature detection.
> Generates `src/vendors/modernizr.js` file from options in `.browserslistrc`.
> Used in webpack build.

```sh
npm run gulp:modernizr
```

&nbsp;
&nbsp;

## License

[MIT License](https://nicksp.mit-license.org/), 2019.

Brought to you by Domagoj-Mario Mendas
