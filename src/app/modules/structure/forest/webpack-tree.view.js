import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import headline from '../../../components/headline/headline.component';

const { div, p, h5, li, span, ol, label, input, a } = hh(h);


// PUBLIC
export function webpackTreeView(dispatch, webpack) {

  // WEBPACK STRUCTURE
  return div({ className: 'grid__container' }, [

    headline(dispatch, h5, 'headline headline--p-normal headline--knockout-lighter headline--prepend-hash', 'Configuration files: Webpack' ),
    p([webpack]),

    // TREE
    ol({ className: 'tree' }, [
      li([
        label({ className: 'tree--folder-selected', attributes: { for: 'buildtils' } }, ['build-utils']),
        input({ id: 'buildUtils', type: 'checkbox', attributes: { checked: '', disabled: '' } }),

        // ROOT DIR
        ol([

          // GULP
          li([
            label({ attributes: { for: 'gulp' } }, ['gulp']),
            input({ id: 'gulp', type: 'checkbox' }),

            ol([

              // TASKS
              li([
                label({ attributes: { for: 'gulp_tasks' } }, ['tasks']),
                input({ id: 'gulp_tasks', type: 'checkbox' }),
                ol([
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['modernizr.js']),
                    span({ className: 'comment' }, ['// task for generating a modernizr class list. run \'npm run gulp:modernizr\' command.']),
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['sprites.js']),
                    span({ className: 'comment' }, ['// task for generating a sprite. run \'npm run gulp:sprites\' command.']),
                  ]),
                ])
              ]), // TASKS

              // TEMPLATES
              li([
                label({ attributes: { for: 'gulp_templates' } }, ['templates']),
                input({ id: 'gulp_templates', type: 'checkbox' }),
                ol([
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['sprites.css']),
                    span({ className: 'comment' }, ['// gulp:sprites task template.']),
                  ]),
                ])
              ]), // TEMPLATES

            ])

          ]), // WEBPACK

          // WEBPACK
          li([
            label({ className: 'tree--folder-selected', attributes: { for: 'webpack' } }, ['webpack']),
            input({ id: 'webpack', type: 'checkbox', attributes: { checked: '', disabled: '' } }),

            ol([

              // LOADERS
              li([
                label({ className: 'tree--folder-selected', attributes: { for: 'webpack_loaders' } }, ['loaders']),
                input({ id: 'webpack_loaders', type: 'checkbox' }),
                ol([
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['ejs.loader.js']),
                  ]),
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['eslint.loader.js']),
                  ]),
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['fonts.loader.js']),
                  ]),
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['html.loader.js']),
                  ]),
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['images.loader.js']),
                  ]),
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['js.loader.js']),
                  ]),
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['postcss.loader.js']),
                  ]),
                ])
              ]), // LOADERS

              // PLUGINS
              li([
                label({ className: 'tree--folder-selected', attributes: { for: 'webpack_plugins' } }, ['plugins']),
                input({ id: 'webpack_plugins', type: 'checkbox' }),
                ol([
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['CleanWebpackPlugin.js']),
                  ]),
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['CopyWebpackPlugin.js']),
                  ]),
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['HotModuleReplacementPlugin.js']),
                  ]),
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['HtmlWebpackPlugin.js']),
                  ]),
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['MiniCssExtractPlugin.js']),
                  ]),
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['OptimizeCSSAssetsPlugin.js']),
                  ]),
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['ProgressPlugin.js']),
                  ]),
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['StyleLintPlugin.js']),
                  ]),
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['TerserWebpackPlugin.js']),
                  ]),
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['WebpackAssetsManifestPlugin.js']),
                  ]),
                ])
              ]), // PLUGINS

              // POSTCSS
              li([
                label({ className: 'tree--folder-selected', attributes: { for: 'webpack_postcss' } }, ['postcss']),
                input({ id: 'webpack_postcss', type: 'checkbox' }),
                ol([
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['postcss.config.js']),
                  ]),
                ])
              ]), // POSTCSS

              // PRESETS
              li([
                label({ className: 'tree--folder-selected', attributes: { for: 'webpack_presets' } }, ['presets']),
                input({ id: 'webpack_presets', type: 'checkbox' }),
                ol([
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['webpack.analyze.js']),
                  ]),
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['webpack.compress.js']),
                  ]),
                ])
              ]), // PRESETS

              // SERVER
              li([
                label({ className: 'tree--folder-selected', attributes: { for: 'webpack_server' } }, ['server']),
                input({ id: 'webpack_server', type: 'checkbox' }),
                ol([
                  li({ className: 'file tree--file-selected' }, [
                    a({ href: '#' }, ['dev-server.js']),
                  ]),
                ])
              ]), // SERVER

              li({ className: 'file' }, [
                a({ className: 'tree--file-selected', 'href': '#' }, ['helpers.js']),
              ]),
              li({ className: 'file' }, [
                a({ className: 'tree--file-selected', 'href': '#' }, ['webpack.common.babel.js']),
                span({ className: 'comment' }, ['// main config file.']),
              ]),
              li({ className: 'file' }, [
                a({ className: 'tree--file-selected', 'href': '#' }, ['webpack.development.babel.js']),
                span({ className: 'comment' }, ['// development mode config file.']),
              ]),
              li({ className: 'file' }, [
                a({ className: 'tree--file-selected', 'href': '#' }, ['webpack.load-presets.js']),
              ]),
              li({ className: 'file' }, [
                a({ className: 'tree--file-selected', 'href': '#' }, ['webpack.paths.js']),
              ]),
              li({ className: 'file' }, [
                a({ className: 'tree--file-selected', 'href': '#' }, ['webpack.production.babel.js']),
                span({ className: 'comment' }, ['// production config file.']),
              ]),

            ])

          ]), // WEBPACK

        ])
      ]),

    ]), // TREE

  ]); // WEBPACK STRUCTURE
}
