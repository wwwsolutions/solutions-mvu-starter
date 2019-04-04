/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

const Model = {
  ecosystem: {
    title: 'Ecosystem.',
    copies: [
      'A modular front-end boilerplate using the power and simplicity of MVU architecture, Webpack 4 + HMR, and ES6+ via Babel. Includes Webpack\'s Tree Shaking configuration. Utilizing functional javascript paradigm, BEM and mobile-first responsive approach. It\'s suitable for scalable applications.',
    ],
    cards: [

      // CARD 1
      {
        header: {
          iconCls: 'icon icon--npm',
          title: 'Node package manager',
        },
        body: {
          txt: 'NPM makes it easy for JavaScript developers to share and reuse code, and makes it easy to update the code that you’re sharing, so you can build amazing things.'
        },
        footer: {
          txt: ''
        }
      },

      // CARD 2
      {
        header: {
          iconCls: 'icon icon--webpack',
          title: 'Webpack 4',
        },
        body: {
          txt: 'Webpack is an open-source JavaScript module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.'
        },
        footer: {
          txt: ''
        }
      },

      // CARD 3
      {
        header: {
          iconCls: 'icon icon--es6',
          title: 'ECMAScript 6',
        },
        body: {
          txt: 'ECMAScript 6 or ECMAScript 2015 is the sixth version of the scripting language standard. The syntax rules of ECMAScript 6 make it easier for developers to write complex web application by taking advantage of new classes, modules, methods, keywords, and data types.'
        },
        footer: {
          txt: ''
        }
      },

      // CARD 4
      {
        header: {
          iconCls: 'icon icon--postcss',
          title: 'PostCSS',
        },
        body: {
          txt: 'PostCSS is a very popular tool that allows developers to write CSS pre-processors or post-processors, called plugins. There is a huge number of plugins that provide lots of functionalities, and sometimes the term “PostCSS” means the tool itself, plus the plugins ecosystem.'
        },
        footer: {
          txt: ''
        }
      },
    ],
  }
};

export { Model as ecosystemModel };

