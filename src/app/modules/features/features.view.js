/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import headline from '../../components/headline/headline.component';
import paragraph from '../../components/paragraph/paragraph.component';
import list from '../../components/list/list.component';

const { div, section, h2, h5 } = hh(h);


// PUBLIC
function view(dispatch, model) {

  const { title } = model.features;
  const  [ c1 ]  = model.features.copies;
  const [ bundlers, linters, transpilers, css, javascript, templates ] = model.features.groups;

  return section({
    id: 'features',
    className: 'section section--bg-features',
    attributes: {
      'data-matching-link': '#horizontal-features-link',
      'data-matching-link-mobile': '#vertical-features-link'
    }

  }, [

    // TITLE SECTION
    div({ className: 'grid__container' }, [
      headline(dispatch, h2, 'headline headline--underlined headline--text-align-center', title),
    ]),

    // COPY SECTION
    div({ className: 'grid__container' }, [
      paragraph('paragraph paragraph--fs-larger', c1),
    ]),

    // GROUPED FEATURES LISTINGS
    div({ className: 'grid__container' }, [

      headline(dispatch, h5, 'headline headline--mb-none headline--p-normal headline--knockout-dark headline--prepend-hash', bundlers.headline),
      list(dispatch, bundlers),

      headline(dispatch, h5, 'headline headline--mb-none headline--p-normal headline--knockout-dark headline--prepend-hash', linters.headline),
      list(dispatch, linters),

      headline(dispatch, h5, 'headline headline--mb-none headline--p-normal headline--knockout-dark headline--prepend-hash', transpilers.headline),
      list(dispatch, transpilers),

      headline(dispatch, h5, 'headline headline--mb-none headline--p-normal headline--knockout-dark headline--prepend-hash', css.headline),
      list(dispatch, css),

      headline(dispatch, h5, 'headline headline--mb-none headline--p-normal headline--knockout-dark headline--prepend-hash', javascript.headline),
      list(dispatch, javascript),

      headline(dispatch, h5, 'headline headline--mb-none headline--p-normal headline--knockout-dark headline--prepend-hash', templates.headline),
      list(dispatch, templates),
    ]),

  ]);
}

export { view as featuresView };
