import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import headline from '../../../components/headline/headline.component';

const { div, p, h5, li, span, ol, label, input, a } = hh(h);


// PUBLIC
export function stylesTreeView(dispatch, styles) {

  // STYLES STRUCTURE
  return div({ className: 'grid__container' }, [

    headline(dispatch, h5, 'headline headline--p-normal headline--knockout-lighter headline--prepend-hash', 'File structure: Styles' ),
    p([styles]),

    // TREE
    ol({ className: 'tree' }, [
      li([
        label({ className: 'tree--folder-selected', attributes: { for: 'src' } }, ['src']),
        input({ id: 'src', type: 'checkbox', attributes: { checked: '', disabled: '' } }),

        // ROOT DIR
        ol([

          // APP
          li([
            label({ attributes: { for: 'app' } }, ['app']),
            input({ id: 'app', type: 'checkbox' }),
            ol([

              // COMPONENTS
              li([
                label({ attributes: { for: 'app_components' } }, ['components']),
                input({ id: 'app_components', type: 'checkbox' }),
                ol([

                  // BUTTON
                  li([
                    label({ attributes: { for: 'app_components_button' } }, ['button']),
                    input({ id: 'app_components_button', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['_button.component.css']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['button.component.js']),
                      ]),
                    ])
                  ]),

                  // CARD
                  li([
                    label({ attributes: { for: 'app_components_card' } }, ['card']),
                    input({ id: 'app_components_card', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['_card.component.css']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['card.component.js']),
                      ]),
                    ])
                  ]),

                  // CODE SNIPPET
                  li([
                    label({ attributes: { for: 'app_components_code_snippet' } }, ['code-snippet']),
                    input({ id: 'app_components_code_snippet', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['_code-snippet.component.css']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['code-snippet.component.js']),
                      ]),
                    ])
                  ]),

                  // COPYRIGHT
                  li([
                    label({ attributes: { for: 'app_components_copyright' } }, ['copyright']),
                    input({ id: 'app_components_copyright', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['_copyright.component.css']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['copyright.component.js']),
                      ]),
                    ])
                  ]),

                  // HEADLINE
                  li([
                    label({ attributes: { for: 'app_components_headline' } }, ['headline']),
                    input({ id: 'app_components_headline', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['_headline.component.css']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['headline.component.js']),
                      ]),
                    ])
                  ]),


                  // LIST
                  li([
                    label({ attributes: { for: 'app_components_list' } }, ['list']),
                    input({ id: 'app_components_list', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['_list.component.css']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['list.component.js']),
                      ]),
                    ])
                  ]),

                  // NAVBAR
                  li([
                    label({ attributes: { for: 'app_components_navbar' } }, ['navbar']),
                    input({ id: 'app_components_navbar', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['_navbar.component.css']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['navbar.component.js']),
                      ]),
                    ])
                  ]),

                  // NAVBAR-OVERLAY
                  li([
                    label({ attributes: { for: 'app_components_navbar_overlay' } }, ['navbar-overlay']),
                    input({ id: 'app_components_navbar_overlay', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['_navbar-overlay.component.css']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['navbar-overlay.component.js']),
                      ]),
                    ])
                  ]),

                  // NAVIGATION
                  li([
                    label({ attributes: { for: 'app_components_nav' } }, ['nav']),
                    input({ id: 'app_components_nav', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['_nav.component.css']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['nav.component.js']),
                      ]),
                    ])
                  ]),

                  // PARAGRAPH
                  li([
                    label({ attributes: { for: 'app_components_paragraph' } }, ['paragraph']),
                    input({ id: 'app_components_paragraph', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['_paragraph.component.css']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['paragraph.component.js']),
                      ]),
                    ])
                  ]),

                  // TITLE-MULTILINE
                  li([
                    label({ attributes: { for: 'app_components_title_multiline' } }, ['title-multiline']),
                    input({ id: 'app_components_title_multiline', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['_title-multiline.component.css']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['title-multiline.component.js']),
                      ]),
                    ])
                  ]),

                  // TOGGLER
                  li([
                    label({ attributes: { for: 'app_components_toggler' } }, ['toggler']),
                    input({ id: 'app_components_toggler', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['_toggler.component.css']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['toggler.component.js']),
                      ]),
                    ])
                  ]),

                  // TYPOGRAPHY-ELEMENT
                  li([
                    label({ attributes: { for: 'app_components_typography_element' } }, ['typography-element']),
                    input({ id: 'app_components_typography_element', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['_typography-element.component.css']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['typography-element.component.js']),
                      ]),
                    ])
                  ]),

                ]),

              ]), // COMPONENTS

              // FUNCTIONALITY
              li([
                label({ attributes: { for: 'app_libs' } }, ['functionality']),
                input({ id: 'app_libs', type: 'checkbox' }),
                ol([
                  li({ className: 'file' }, [
                    a({ className: 'tree--file-selected', href: '#' }, ['MobileMenu.js']),
                    span({ className: 'comment' }, ['// sliding/mobile menu functionality'])
                  ]),
                  li({ className: 'file' }, [
                    a({ className: 'tree--file-selected', href: '#' }, ['RevealOnScroll.js']),
                    span({ className: 'comment' }, ['// reveal elements on scroll functionality with waypoints'])
                  ]),
                  li({ className: 'file' }, [
                    a({ className: 'tree--file-selected', href: '#' }, ['StickyHeader.js']),
                    span({ className: 'comment' }, ['// sticky header functionality with waypoints'])
                  ]),

                ])
              ]), // FUNCTIONALITY

              // MODULES
              li([
                label({ attributes: { for: 'app_modules' } }, ['modules']),
                input({ id: 'app_modules', type: 'checkbox' }),

                ol([

                  // ECOSYSTEM MODULE
                  li([
                    label({ attributes: { for: 'module_ecosystem' } }, ['ecosystem']),
                    input({ id: 'module_ecosystem', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['ecosystem.actions.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['ecosystem.messages.model.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['ecosystem.model.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['ecosystem.view.js']),
                      ]),
                    ])
                  ]),

                  // FEATURES MODULE
                  li([
                    label({ attributes: { for: 'module_features' } }, ['features']),
                    input({ id: 'module_features', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['features.actions.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['features.messages.model.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['features.model.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['features.view.js']),
                      ]),
                    ])
                  ]),

                  // FOOTER MODULE
                  li([
                    label({ attributes: { for: 'module_footer' } }, ['footer']),
                    input({ id: 'module_footer', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['footer.actions.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['footer.messages.model.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['footer.model.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['footer.view.js']),
                      ]),
                    ])
                  ]),

                  // HERO MODULE
                  li([
                    label({ attributes: { for: 'module_hero' } }, ['hero']),
                    input({ id: 'module_hero', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['hero.actions.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['hero.messages.model.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['hero.model.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['hero.view.js']),
                      ]),
                    ])
                  ]),

                  // INSTRUCTIONS MODULE
                  li([
                    label({ attributes: { for: 'module_instructions' } }, ['instructions']),
                    input({ id: 'module_instructions', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['instructions.actions.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['instructions.messages.model.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['instructions.model.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['instructions.view.js']),
                      ]),
                    ])
                  ]),

                  // STRUCTURE MODULE
                  li([
                    label({ attributes: { for: 'module_structure' } }, ['structure']),
                    input({ id: 'module_structure', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['structure.actions.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['structure.messages.model.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['structure.model.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['structure.view.js']),
                      ]),
                    ])
                  ]),

                  // TYPOGRAPHY MODULE
                  li([
                    label({ attributes: { for: 'module_typography' } }, ['typography']),
                    input({ id: 'module_typography', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['typography.actions.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['typography.messages.model.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['typography.model.js']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['typography.view.js']),
                      ]),
                    ])
                  ]),


                ])
              ]), // MODULES

              li({ className: 'file' }, [
                a({ href: '#' }, ['Model.js']),
              ]),
              li({ className: 'file' }, [
                a({ href: '#' }, ['Runtime.js']),
              ]),
              li({ className: 'file' }, [
                a({ href: '#' }, ['Update.js']),
              ]),
              li({ className: 'file' }, [
                a({ href: '#' }, ['View.js']),
              ]),
            ])
          ]), // APP

          // ASSETS
          li([
            label({ attributes: { for: 'assets' } }, ['assets']),
            input({ id: 'assets', type: 'checkbox' }),
            ol([

              // FONTS
              li([
                label({ attributes: { for: 'fonts' } }, ['fonts']),
                input({ id: 'fonts', type: 'checkbox' }),
                ol([

                  // FONT1
                  li([
                    label({ attributes: { for: 'font1' } }, ['font1']),
                    input({ id: 'font1', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['font1.css']),
                        span({ className: 'comment' }, ['// font config.'])
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['font1.eot']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['font1.svg']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['font1.ttf']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['font1.woff']),
                      ]),
                    ])
                  ]), // FONT1

                  // FONT2
                  li([
                    label({ attributes: { for: 'font2' } }, ['font2']),
                    input({ id: 'font2', type: 'checkbox' }),
                    ol([
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['font2.css']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['font2.eot']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['font2.svg']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['font2.ttf']),
                      ]),
                      li({ className: 'file' }, [
                        a({ href: '#' }, ['font2.woff']),
                      ]),
                    ])
                  ]), // FONT2

                ])
              ]), // FONTS

              // ICONS
              li([
                label({ attributes: { for: 'icons' } }, ['icons']),
                input({ id: 'icons', type: 'checkbox' }),
                ol([
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['icon1.svg']),
                    span({ className: 'comment' }, ['// custom icon.'])
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['icon2.svg']),
                  ]),
                ])
              ]), // ICONS

              // IMAGES
              li([
                label({ attributes: { for: 'images' } }, ['images']),
                input({ id: 'images', type: 'checkbox' }),
                ol([
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['image1.jpg']),
                    span({ className: 'comment' }, ['// app custom images as .svg, .png, .jpg.'])
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['image2.png']),
                  ]),
                ])
              ]),

              // SPRITES
              li([
                label({ attributes: { for: 'sprites' } }, ['sprites']),
                input({ id: 'sprites', type: 'checkbox' }),
                ol([
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['sprite-922f93fb.svg']),
                    span({ className: 'comment' }, ['// sprite is generated with \'npm run gulp:icons\'.'])
                  ]),
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['sprite-922f93fb.png']),
                    span({ className: 'comment' }, ['// sprite fallback.'])
                  ]),
                ])
              ]), // SPRITES

            ])
          ]), // ASSETS


          // STYLES
          li([
            label({ className: 'tree--folder-selected', attributes: { for: 'styles' } }, ['styles']),
            input({ id: 'src', type: 'checkbox', attributes: { checked: '', disabled: '' } }),

            ol([

              // POSTCSS
              li([
                label({ className: 'tree--folder-selected', attributes: { for: 'postcss' } }, ['postcss']),
                input({ id: 'src', type: 'checkbox', attributes: { checked: '', disabled: '' } }),
                ol([

                  // BASE
                  li([
                    label({ className: 'tree--folder-selected', attributes: { for: 'base' } }, ['base']),
                    input({ id: 'src', type: 'checkbox', attributes: { checked: '', disabled: '' } }),
                    ol([
                      li({ className: 'file' }, [
                        a({ className: 'tree--file-selected', href: '#' }, ['_common.css']),
                        span({ className: 'comment' }, ['// global common styles.'])
                      ]),
                      li({ className: 'file' }, [
                        a({ className: 'tree--file-selected', href: '#' }, ['_mixins.css']),
                        span({ className: 'comment' }, ['// global mixins.'])
                      ]),
                      li({ className: 'file' }, [
                        a({ className: 'tree--file-selected', href: '#' }, ['_typography.css']),
                        span({ className: 'comment' }, ['// global typography styles.'])
                      ]),
                      li({ className: 'file' }, [
                        a({ className: 'tree--file-selected', href: '#' }, ['_variables.css']),
                        span({ className: 'comment' }, ['// global variables.'])
                      ]),

                    ])
                  ]), // BASE

                  // EFFECTS
                  li([
                    label({ className: 'tree--folder-selected', attributes: { for: 'effects' } }, ['effects']),
                    input({ id: 'src', type: 'checkbox', attributes: { checked: '', disabled: '' } }),
                    ol([
                      li({ className: 'file' }, [
                        a({ className: 'tree--file-selected', href: '#' }, ['_reveal-item.css']),
                        span({ className: 'comment' }, ['// styles for reveal effects.'])
                      ]),

                    ])
                  ]), // GENERATED

                  // GENERATED
                  li([
                    label({ className: 'tree--folder-selected', attributes: { for: 'generated' } }, ['generated']),
                    input({ id: 'src', type: 'checkbox', attributes: { checked: '', disabled: '' } }),
                    ol([
                      li({ className: 'file' }, [
                        a({ className: 'tree--file-selected', href: '#' }, ['_sprite.css']),
                        span({ className: 'comment' }, ['// styles for sprite are generated by \'npm run gulp:icons\' command.'])
                      ]),

                    ])
                  ]), // GENERATED

                  // LAYOUT
                  li([
                    label({ className: 'tree--folder-selected', attributes: { for: 'layout' } }, ['layout']),
                    input({ id: 'src', type: 'checkbox', attributes: { checked: '', disabled: '' } }),
                    ol([
                      li({ className: 'file' }, [
                        a({ className: 'tree--file-selected', href: '#' }, ['_grid.css']),
                        span({ className: 'comment' }, ['// global grid styles. lost-grid is a default.'])
                      ]),
                      li({ className: 'file' }, [
                        a({ className: 'tree--file-selected', href: '#' }, ['_section.css']),
                        span({ className: 'comment' }, ['// global section styles.'])
                      ]),

                    ])
                  ]), // LAYOUT

                  // MAIN CSS
                  li({ className: 'file' }, [
                    a({ className: 'tree--file-selected', href: '#' }, ['main.css']),
                    span({ className: 'comment' }, ['// control/add/remove styles.'])
                  ]),

                ])
              ]), // POSTCSS

            ])
          ]), // STYLES



          // TEMPLATES
          li([
            label({ attributes: { for: 'templates' } }, ['templates']),
            input({ id: 'templates', type: 'checkbox' }),

            ol([
              li([
                label({ attributes: { for: 'templatesImages' } }, ['images']),
                input({ id: 'templatesImages', type: 'checkbox' }),
                ol([
                  li({ className: 'file' }, [
                    a({ href: '#' }, ['favicon.png']),
                    span({ className: 'comment' }, ['// application`s favicon.'])
                  ]),
                ])
              ]),
              li({ className: 'file' }, [
                a({ href: '#' }, ['index.ejs']),
                span({ className: 'comment' }, ['// index template. source for index.html.'])
              ]),
            ])
          ]), // TEMPLATES

          // VENDORS
          li([
            label({ attributes: { for: 'vendors' } }, ['vendors']),
            input({ id: 'vendors', type: 'checkbox' }),
            ol([
              li({ className: 'file' }, [
                a({ href: '#' }, ['index.js']),
                span({ className: 'comment' }, ['// vendors index. add/remove vendor.'])
              ]),
              li({ className: 'file' }, [
                a({ href: '#' }, ['jquery.js']),
              ]),
              li({ className: 'file' }, [
                a({ href: '#' }, ['lazysizes.js']),
              ]),
              li({ className: 'file' }, [
                a({ href: '#' }, ['modernizr.js']),
              ]),
              li({ className: 'file' }, [
                a({ href: '#' }, ['picturefill.js']),
              ]),
            ])
          ]), // VENDORS

          // ROOT FILES
          li({ className: 'file' }, [
            a({ 'href': '#' }, ['index.js']),
            span({ className: 'comment' }, ['// app main index'])
          ]),

        ])
      ]),

    ]),

  ]); // STYLES STRUCTURE

}
