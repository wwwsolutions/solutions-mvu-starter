/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

const Model = {
  features: {
    title: 'Features.',
    copies: [
      'The provided boilerplate is powered by the following technology stack:',
    ],

    groups: [

      // BUNDLERS & TASK RUNNERS
      {
        headline: 'Bundlers & task runners',
        list: [
          {
            module: 'npm',
            href: 'https://www.npmjs.com/',
            description: 'Package manager and task runner, npm is the world’s largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.'
          },
          {
            module: 'Webpack 4',
            href: 'https://www.npmjs.com/package/webpack/',
            description: 'Webpack is a module builder. This is important to understand, as Webpack does not run during your page, it runs during your development. Webpack is a tool wherein you use a configuration to explain to the builder how to load specific things. You describe to Webpack how to load *.js files, or how it should look at .scss files, etc. Then, when you run it, it goes into your entry point and walks up and down your program and figures out exactly what it needs, in what order it needs it, and what each piece depends on. It will then create bundles — as few as possible, as optimized as possible, that you include as the scripts in your application.'
          },
          {
            module: 'Gulp 4',
            href: 'https://www.npmjs.com/package/gulp/',
            description: 'Gulp is a javascript task runner. There’s no point in investing your time into learning a new tool if you don’t even know what problem it solves. Gulp solves the problem of repetition. Many of the tasks that web developers find themselves doing over and over on a daily basis can be simplified by becoming automated. Automating repetitive tasks = more time to do non repetitive tasks = more productivity.'
          },

        ]
      },

      // LINTERS
      {
        headline: 'Linters',
        list: [
          {
            module: 'ESLint',
            href: 'http://eslint.org/docs/user-guide/configuring/',
            description: 'Modern linter that helps you avoid errors and enforce conventions in your styles. Besides checking style, linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope. Assignment to undeclared variables (these leak into the global scope, contaminating it and possibly causing very difficult to find bugs) and use of undefined variables are examples of errors that are detectable at lint time.'
          },
          {
            module: 'StyleLint',
            href: 'https://www.npmjs.com/package/stylelint/',
            description: 'Stylelint is a mighty, modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.'
          },
        ]
      },

      // TRANSPILERS
      {
        headline: 'Transpilers',
        list: [
          {
            module: 'Babel 7',
            href: 'https://babeljs.io/',
            description: 'Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones). It makes available all the syntactical sugar that was added to JavaScript with the new ES6 specification, including classes, fat arrows and multiline strings.'
          },
        ]
      },

      // CSS ECOSYSTEM
      {
        headline: 'CSS ecosystem',
        list: [
          {
            module: 'PostCSS',
            href: 'http://postcss.org/',
            description: 'PostCSS is a tool for transforming CSS with JavaScript. PostCSS itself is very small. It only includes a CSS parser, a CSS node tree API, a source map generator and a node tree stringifier. All the magic happens by the plugins.'
          },
          {
            module: 'Tachyons',
            href: 'https://www.npmjs.com/package/tachyons/',
            description: 'Tachyons is a CSS Design System anyone can learn/use to craft beautiful, responsive & fast UIs with minimal CSS! ... Tachyons embraces a different style than many popular CSS frameworks known as "Functional CSS".'
          },
        ]
      },

      // JAVASCRIPT ECOSYSTEM
      {
        headline: 'JavaScript ecosystem',
        list: [
          {
            module: 'jQuery',
            href: 'https://www.npmjs.com/package/jquery/',
            description: 'JavaScript library.'
          },
          {
            module: 'Waypoints',
            href: 'https://www.npmjs.com/package/waypoints/',
            description: 'JavaScript library that makes it easy to execute a function whenever you scroll to an element.'
          },
          {
            module: 'Ramda',
            href: 'https://www.npmjs.com/package/ramda/',
            description: 'JavaScript functional library.'
          },
          {
            module: 'Hyperscript Helpers',
            href: 'https://github.com/ohanhi/hyperscript-helpers/',
            description: 'Terse syntax for hyperscript.'
          },
          {
            module: 'Virtual DOM',
            href: 'https://www.npmjs.com/package/virtual-dom/',
            description: 'A JavaScript DOM model supporting element creation, diff computation and patch operations for efficient re-rendering.'
          },
        ]
      },

      // TEMPLATES
      {
        headline: 'Templates',
        list: [
          {
            module: 'EJS',
            href: 'https://www.npmjs.com/package/ejs/',
            description: 'Embedded JavaScript templates. EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.'
          },
        ]
      },

    ],
  }
};

export { Model as featuresModel };

