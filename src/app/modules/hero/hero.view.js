/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

// COMPONENTS
import navbar from '../../components/navbar/navbar.component';
import titleMultiline from '../../components/title-multiline/title-multiline.component';
import button from '../../components/button/button.component';

const { div, header } = hh(h);

// PUBLIC
function view(dispatch, model) {
  const { multilineTitle, btnInstructions, btnGetBoilerplate, links } = model.hero;

  // SECTION
  return header({
    id: 'header',
    className: 'section section--p-none section--bg-hero',
    attributes: {
      'data-matching-link': '#horizontal-header-link',
      'data-matching-link-mobile': '#vertical-header-link'
    }
  }, [

    navbar(dispatch, 'navbar', links),

    div({ className: 'grid__container' }, [
      div({ className: 'grid__hero' }, [
        div({ className: 'grid__hero-item' }, [

          titleMultiline(dispatch, 'title-multiline', multilineTitle),

          div({ className: 'grid__hero-buttons' }, [
            button(dispatch, 'button button--state button--fs-large button--bg-green button--b-dark button--mb-until-small button--mr-after-small button--br-small', btnInstructions, null),
            button(dispatch, 'button button--state button--fs-large button--bg-transparent button--b-dark button--br-small', btnGetBoilerplate, null),
          ])

        ]),
      ]),
    ]),

  ]);
}

export { view as heroView };
