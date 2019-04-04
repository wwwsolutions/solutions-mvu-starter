import _HtmlWebpackPlugin from 'html-webpack-plugin';
import paths from '../webpack.paths';

// And any other config options from html-webpack-plugin:
// https://github.com/ampedandwired/html-webpack-plugin#configuration
const HtmlWebpackPlugin = new _HtmlWebpackPlugin({

  title: 'Webpack ES6 Starter Project w/ MVU architecture',

  filename: 'index.html',

  template: paths.templates.tmpl,

  // templateParameters: {},

  inject: false,

  favicon: paths.templates.favicon,

  meta: [
    // Will generate: <meta name="theme-color" content="#4285f4">
    ['theme-color', '#4285f4'],
    ['testing-meta', 'success'],
  ],

  minify: {
    collapseWhitespace: true
  },

  hash: true,

  cache: true,

  showErrors: true,

  lang: 'en-US',

  mobile: true,

  appMountId: 'app',

  // appMountHtmlSnippet: '<div class="app-spinner"><i class="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i></div>',

  // headHtmlSnippet: '<style>div.app-spinner {position: fixed;top:50%;left:50%;}</style >',

  // bodyHtmlSnippet: '<custom-element></custom-element>',

  // baseHref: 'http://example.com/awesome',

  // devServer: 'http://localhost:3001',

  // googleAnalytics: {
  //   trackingId: 'UA-XXXX-XX',
  //   pageViewOnLoad: true
  // },

});

export default HtmlWebpackPlugin;
