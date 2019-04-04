import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import headline from '../../../components/headline/headline.component';

const { div, p, h5, li, span, ol, label, input, a } = hh(h);


// PUBLIC
export function gulpTreeView(dispatch, gulp) {

  // GULP STRUCTURE
  return div({ className: 'grid__container' }, [

    headline(dispatch, h5, 'headline headline--p-normal headline--knockout-lighter headline--prepend-hash', 'Configuration files: Gulp' ),
    p([gulp]),

    // TREE
    ol({ className: 'tree' }, [
      li([
        label({ className: 'tree--folder-selected', attributes: { for: 'buildtils' } }, ['build-utils']),
        input({ id: 'buildUtils', type: 'checkbox', attributes: { checked: '', disabled: '' } }),

        // ROOT DIR
        ol([

          // GULP
          li([
            label({ className: 'tree--folder-selected', attributes: { for: 'gulp' } }, ['gulp']),
            input({ id: 'gulp', type: 'checkbox', attributes: { checked: '', disabled: '' } }),

            ol([

              // TASKS
              li([
                label({ className: 'tree--folder-selected', attributes: { for: 'gulp_tasks' } }, ['tasks']),
                input({ id: 'gulp_tasks', type: 'checkbox', attributes: { checked: '', disabled: '' } }),
                ol([
                  li({ className: 'file' }, [
                    a({ className: 'tree--file-selected', href: '#' }, ['modernizr.js']),
                    span({ className: 'comment' }, ['// task for generating a modernizr class list. run \'npm run gulp:modernizr\' command.']),
                  ]),
                  li({ className: 'file' }, [
                    a({ className: 'tree--file-selected', href: '#' }, ['sprites.js']),
                    span({ className: 'comment' }, ['// task for generating a sprite. run \'npm run gulp:sprites\' command.']),
                  ]),
                ])
              ]), // TASKS

              // TEMPLATES
              li([
                label({ className: 'tree--folder-selected', attributes: { for: 'gulp_templates' } }, ['templates']),
                input({ id: 'gulp_templates', type: 'checkbox', attributes: { checked: '', disabled: '' } }),
                ol([
                  li({ className: 'file' }, [
                    a({ className: 'tree--file-selected', href: '#' }, ['sprites.css']),
                    span({ className: 'comment' }, ['// gulp:sprites task template.']),
                  ]),
                ])
              ]), // TEMPLATES

            ])


          ]), // WEBPACK

          // WEBPACK
          li([
            label({ className: 'folder', attributes: { for: 'webpack' } }, ['webpack']),
            input({ id: 'webpack', type: 'checkbox' }),

            ol([

              // LOADERS
              li([
                label({ attributes: { for: 'webpack_loaders' } }, ['loaders']),
                input({ id: 'webpack_loaders', type: 'checkbox' }),
                ol([
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['ejs.loader.js']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['eslint.loader.js']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['fonts.loader.js']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['html.loader.js']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['images.loader.js']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['js.loader.js']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['postcss.loader.js']),
                  ]),
                ])
              ]), // LOADERS

              // PLUGINS
              li([
                label({ attributes: { for: 'webpack_plugins' } }, ['plugins']),
                input({ id: 'webpack_plugins', type: 'checkbox' }),
                ol([
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['CleanWebpackPlugin.js']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['CopyWebpackPlugin.js']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['HotModuleReplacementPlugin.js']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['HtmlWebpackPlugin.js']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['MiniCssExtractPlugin.js']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['OptimizeCSSAssetsPlugin.js']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['ProgressPlugin.js']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['StyleLintPlugin.js']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['TerserWebpackPlugin.js']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['WebpackAssetsManifestPlugin.js']),
                  ]),
                ])
              ]), // PLUGINS

              // POSTCSS
              li([
                label({ attributes: { for: 'webpack_postcss' } }, ['postcss']),
                input({ id: 'webpack_postcss', type: 'checkbox' }),
                ol([
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['postcss.config.js']),
                  ]),
                ])
              ]), // POSTCSS

              // PRESETS
              li([
                label({ attributes: { for: 'webpack_presets' } }, ['presets']),
                input({ id: 'webpack_presets', type: 'checkbox' }),
                ol([
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['webpack.analyze.js']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['webpack.compress.js']),
                  ]),
                ])
              ]), // PRESETS

              // SERVER
              li([
                label({ attributes: { for: 'webpack_server' } }, ['server']),
                input({ id: 'webpack_server', type: 'checkbox' }),
                ol([
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['dev-server.js']),
                  ]),
                ])
              ]), // SERVER

              li({ className: 'file' }, [
                a({ 'href': '#' }, ['helpers.js']),
              ]),
              li({ className: 'file' }, [
                a({ className: 'tree--selected', 'href': '#' }, ['webpack.common.babel.js']),
                span({ className: 'comment' }, ['// main config file.']),
              ]),
              li({ className: 'file' }, [
                a({ className: 'tree--selected', 'href': '#' }, ['webpack.development.babel.js']),
                span({ className: 'comment' }, ['// development mode config file.']),
              ]),
              li({ className: 'file' }, [
                a({ 'href': '#' }, ['webpack.load-presets.js']),
              ]),
              li({ className: 'file' }, [
                a({ 'href': '#' }, ['webpack.paths.js']),
              ]),
              li({ className: 'file' }, [
                a({ className: 'tree--selected', 'href': '#' }, ['webpack.production.babel.js']),
                span({ className: 'comment' }, ['// production config file.']),
              ]),

            ])

          ]), // WEBPACK

        ])
      ]),

    ]), // TREE


  ]); // GULP STRUCTURE

}
