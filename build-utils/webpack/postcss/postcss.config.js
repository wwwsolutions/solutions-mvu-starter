module.exports = {
  plugins: {

    'postcss-import': { // https://github.com/postcss/postcss-import
    },

    'postcss-map': { // https://www.npmjs.com/package/postcss-map
      basePath: 'src/presets',
      maps: [
        'responsive/mobile-first/breakpoints.yml', // SET MOBILE FIRST BREAKPOINTS
        // 'responsive/desktop-first/breakpoints.yml', // SET DESKTOP FIRST BREAKPOINTS
        'typography/ratio.yml',
        'typography/step.yml',
        'responsive/line-height.yml',
        'typography/font.yml',
      ],
    },

    'postcss-bem-fix-fdruide': { // https://www.npmjs.com/package/postcss-bem-fix-fdruide
      style: 'bem',                 // suit or bem, suit by default,
      defaultNamespace: undefined,  // default namespace to use, none by default
      separators: {
          descendent: '__',
          modifier: '--'        // overwrite any default separator for chosen style
      },
      shortcuts: {
          utility: 'util' //override at-rule name
      }
    },

    // 'postcss-custom-media': { // https://github.com/postcss/postcss-custom-media
    // },

    'postcss-mixins': { // https://github.com/postcss/postcss-mixins
    },

    /* SIMPLE VARS */
    'postcss-simple-vars': { // https://github.com/postcss/postcss-simple-vars
    },

    // 'postcss-advanced-variables': { // https://github.com/jonathantneal/postcss-advanced-variables
    //   unresolved: 'error', // handle unresolved variables
    //   disable: '@include, @mixin, @include, @content' // ignore @mixin, @include, and @content at-rules
    // },

    'postcss-nested': { // https://github.com/postcss/postcss-nested
    },

    'postcss-utilities': { // https://ismamz.github.io/postcss-utilities/docs
    },

    // 'postcss-property-lookup': { // https://github.com/simonsmith/postcss-property-lookup
    //   logLevel: 'warn'
    // },

    'postcss-jsmath': { // https://github.com/naaspati/postcss-jsmath
      isString(arg) {
        if (isNaN(arg)) {
          return 1;
        }
        return 0;
      },
      // HELPER FUNCTIONS
      sum(...numbers) {
        return numbers.reduce((x, y) => x + y);
      },
      pow(base, exponent) {
        return Math.pow(base, exponent);
      },

    },

    'postcss-calc': { // https://github.com/postcss/postcss-calc
      // Adds warnings when calc() are not reduced to a single value.
      warnWhenCannotResolve: false,
      // Allow you to preserve calc() usage in output so browsers
      // will handle decimal precision themselves.
      preserve: false,
      // Allows calc() usage as part of media query declarations.
      mediaQueries: true,
      // Allows calc() usage as part of selectors.
      selectors: true,
      // Allow you to define the precision for decimal numbers.
      precision: 5,
    },

    'postcss-atroot': { // https://www.npmjs.com/package/postcss-atroot
    },

    'postcss-selector-not': { // https://github.com/postcss/postcss-selector-not
    },

    'postcss-extend': { // https://github.com/travco/postcss-extend
    },

    'lost': { // http://lostgrid.org/docs
    },

    'postcss-preset-env': { // https://github.com/csstools/postcss-preset-env
      stage: 0,
    },

    'postcss-color-function': { // https://github.com/postcss/postcss-color-function
    },

    'postcss-media-fn': { // https://github.com/jonathantneal/postcss-media-fn
    },

    'postcss-flexbugs-fixes': { // https://github.com/luisrudge/postcss-flexbugs-fixes
    },

    'cssnano': { // https://www.npmjs.com/package/cssnano
    },

    'postcss-reporter': { // https://github.com/postcss/postcss-reporter
    },

  },
};
