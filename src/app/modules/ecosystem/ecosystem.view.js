/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import headline from '../../components/headline/headline.component';
import paragraph from '../../components/paragraph/paragraph.component';
import card from '../../components/card/card.component';

const { section, div, h2 } = hh(h);


// PUBLIC
function view(dispatch, model) {

  const { title } = model.ecosystem;
  const [ c1, c2 ]  = model.ecosystem.copies;
  const [ cardNpm, cardWebpack, cardES6, cardPostCSS ]  = model.ecosystem.cards;

  return section({
    id: 'ecosystem',
    className: 'section',
    attributes: {
      'data-matching-link': '#horizontal-ecosystem-link',
      'data-matching-link-mobile': '#vertical-ecosystem-link'
    }
  }, [

    // TITLE SECTION
    div({ className: 'grid__container' }, [
      headline(dispatch, h2, 'headline headline--underlined headline--text-align-center', title),
    ]),

    // COPY SECTION
    div({ className: 'grid__container' }, [
      paragraph('paragraph paragraph--fs-larger', c1),
      paragraph('paragraph paragraph--fs-larger', c2),
    ]),

    // CARD DECK FEATURES
    div({ className: 'grid__container' }, [
      div({ className: 'grid__ecosystem-deck' }, [
        div({ className: 'grid__ecosystem-card' }, [

          // GENERATE CARD
          card(dispatch, cardNpm),

        ]),
        div({ className: 'grid__ecosystem-card' }, [

          // GENERATE CARD
          card(dispatch, cardWebpack),

        ]),
        div({ className: 'grid__ecosystem-card' }, [

          // GENERATE CARD
          card(dispatch, cardES6),

        ]),
        div({ className: 'grid__ecosystem-card' }, [

          // GENERATE CARD
          card(dispatch, cardPostCSS),

        ]),
      ]),
    ])
  ]);
}

export { view as ecosystemView };
