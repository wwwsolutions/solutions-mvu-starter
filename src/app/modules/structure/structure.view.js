/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import headline from '../../components/headline/headline.component';
import paragraph from '../../components/paragraph/paragraph.component';

// TREES
import { webpackTreeView } from './forest/webpack-tree.view';
import { gulpTreeView } from './forest/gulp-tree.view';
import { applicationTreeView } from './forest/application-tree.view';
import { stylesTreeView } from './forest/styles-tree.view';

const { div, section, h2 } = hh(h);


// PUBLIC
function view(dispatch, model) {

  const { title } = model.structure;
  const  [ introduction, webpack, gulp, application, styles ]  = model.structure.copies;

  return section({
    id: 'structure',
    className: 'section',
    attributes: {
      'data-matching-link': '#horizontal-structure-link',
      'data-matching-link-mobile': '#vertical-structure-link'
    }
  }, [

    // TITLE SECTION
    div({ className: 'grid__container' }, [
      headline(dispatch, h2, 'headline headline--underlined headline--text-align-center', title),
    ]),

    // COPY SECTION
    div({ className: 'grid__container' }, [
      paragraph('paragraph paragraph--fs-larger', introduction),
    ]),

    webpackTreeView(dispatch, webpack),
    gulpTreeView(dispatch, gulp),
    applicationTreeView(dispatch, application),
    stylesTreeView(dispatch, styles),

  ]);
}

export { view as structureView };
